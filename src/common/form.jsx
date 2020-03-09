import React, { Component } from 'react';
import Input from './input';
import '../styles/login.css';

class Form extends Component {
	state = {
		data: {}
	}

	handleSubmit = e => {
		e.preventDefault();
	};

	routeChange = () => {
		//username password validation
		//if validated successfully, redirect to home page
		//else popup message that wrong password
		let path = '/userhome';
		this.props.history.push(path);
  }

	handleChange = ({ currentTarget: input }) => {
		const data = {...this.state.data};
		data[input.name] =input.value;
		this.setState({data});
	};

	renderButton = label => {
		return (
			<button className="btn btn-primary align-md-center" onClick={this.routeChange}>{label}</button>
		);
	};

	renderInput(name, label, type) {
		const { data } = this.state;
		return (
			<Input
				name={name}
				value={data[name]}
				label={label}
				type={type}
				onChange={this.handleChange}
			/>
		);
	}


}
 
export default Form;