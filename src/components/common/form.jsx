import React, { Component } from 'react';
import joi from 'joi'
import Input from './input';

class Form extends Component {

    handlChange = () => {
        console.log('changed');
    }
    validate = () => {
        const option = { abortEarly: false };
        console.log(this.state.account);
        console.log(this.schema);
        const validationResult = joi.validate(this.state.account, this.schema, option);
        if (!validationResult)
            return null;

        const errors = {};
        
        for (let item of validationResult.error.details)
        errors[item.path[0]] = item.message;
        this.setState({errors:errors});
        console.log(errors);

        return errors;
      

    }

    renderInput(name, label, type = 'text') {
        const {errors,account}=this.state;
        return <Input onChange={this.handleChange} value={account[name]} name={name} label={label} type={type} error={errors[name]} ></Input>

    }
    renderButton(label) {
        return <input type="submit" className="btn btn-primary" value={label} />
    }

}

export default Form;