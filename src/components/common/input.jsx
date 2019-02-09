import React, { Component } from 'react';

class Input extends Component {
    state = {}
    render() {
        const {name,label,type,error}=this.props ;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input type={type} name={name} id={name} className="form-control" />
            {error&&    <div className="alert alert-danger">
                   {error}
               </div>
            }
            </div>
        );
    }
}

export default Input;

