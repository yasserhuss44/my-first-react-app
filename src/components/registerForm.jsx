import React, { Component } from 'react';
import joi from 'joi'

import Form from './common/form'

class Register extends Form {
    state = {
        account: { name: '', username: '', password: '' },
        errors: {}
    }
    schema = {
        username: joi.string().required().email().label('Username'),
        password: joi.string().required().min(5).label('Password'),
        name: joi.string().required().min(6).label('name')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('name', 'name')}
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton('Submit')}
            </form>
        );
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors });
        if (errors)
            return;
        this.doSubmit();
    }
    doSubmit = () => {
        console.log('submitted');
    }
}

export default Register;