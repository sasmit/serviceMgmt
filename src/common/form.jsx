import React, { Component } from 'react';
import Input from './input';

class Form extends Component {
    state = {
        data: {}
    }

    handleSubmit = e => {
		e.preventDefault();

		console.log("Submitted.");
	};

    handleChange = ({ currentTarget: input }) => {
		const data = {...this.state.data};
		data[input.name] =input.value;
		this.setState({data});
	};

    renderButton = label => {
        return (
            <button className="btn btn-primary align-md-center">{label}</button>
        );
    };

    renderInput(name, label) {
        const { data } = this.state;
        return (
            <Input
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
            />
        );
    }


}
 
export default Form;