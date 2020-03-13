import React, { Component } from 'react';
import Input from './input';
import DropDown from './dropdown';
import '../styles/login.css';

class Form extends Component {
	state = {
		data: {},
		errors: {}
	}

	handleSubmit = e => {
		e.preventDefault();

		//username password validation
		//if validated successfully, redirect to home page
		//else popup message that wrong password
		const errors =  this.validate();
		this.setState({ errors: errors || {} });
		if (Object.keys(errors).length !== 0) return;
		else {
			//server side validation
			this.routeChange();
		}
	};

	routeChange = () => {
		const data = this.state.data;
		//this should be execute only when login/register happens
		if (data.form === "login" || data.form === "register") {
			if (data.type === "1") {
				let path = '/ownerhome';
				this.props.history.push(path);
			} else if (data.type === "2") {
				let path = '/userhome';
				this.props.history.push(path);
			} else if (data.type === "3") {
				let path = '/vendorhome';
				this.props.history.push(path);
			}
		} else if (data.form === "complaint") {
			if (data.type !== 0) {
				let path = '/userhome';
				this.props.history.push(path);
			}
		}
	};

	handleSelect = (e) => {
		console.log("option selected");
		const data = {...this.state.data};
		data.type = e.currentTarget.value;
		this.setState({data});
		console.log(data);
	};

	handleChange = ({ currentTarget: input }) => {
		const data = {...this.state.data};
		data[input.name] =input.value;
		this.setState({data});
	};

	renderButton = label => {
		return (
			<button 
				className="btn btn-primary align-md-center"
			>{label}
			</button>
		);
	};

	renderInput(name, label, type) {
		const { data , errors} = this.state;
		return (
			<Input
				name={name}
				value={data[name]}
				label={label}
				type={type}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}

	renderDropDown(options) {
		const { data,errors } = this.state;
		return (
			<DropDown
				options={options}
				value ={data.type}
				onChange={this.handleSelect}
				error={errors.type}
			/>
		);
	}


}

export default Form;