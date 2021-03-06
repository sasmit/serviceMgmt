import React, { Component } from 'react';
import Input from './input';
import DropDown from './dropdown';
import '../styles/login.css';
import { SERVER_ADDRESS, API } from '../utils/constant.js';
class Form extends Component {
	state = {
		data: {},
		errors: {}
	}
	postLoginFormData = ({ password: { value: password }, username: { value: name }, userType: { value: user } }) => {
		//console.log(SERVER_ADDRESS.LOCAL);
		let data = { userName: name, password: password, userType: user };
		fetch(SERVER_ADDRESS.LOCAL_URL + API.USER_LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then((response) => {
			response.json().then((body) => {
				console.log("Success Response " + body);
				this.routeChange();
			})
		}, (error) => {
			console.log("Error is" + error);
		});
	}

	postRegisterFormData = ({ password: { value: password }, email: { value: email }, username: { value: name }, userType: { value: user } }) => {
		//console.log(SERVER_ADDRESS.LOCAL);
		let data = { userName: name, email: email, password: password, userType: user };
		fetch(SERVER_ADDRESS.LOCAL_URL + API.issue_save, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then((response) => {
			response.json().then((body) => {
				console.log("Success Response " + body);
				this.routeChange();
			})
		}, (error) => {
			console.log("Error is" + error);
		});
	}

	postComplainFormData = ({ title: { value: title }, description: { value: description }, userType: { value: issueType } }) => {
		let data = { title: title, description: description, issueType: issueType };
		fetch(SERVER_ADDRESS.LOCAL_URL + API.USER_REGISTRATION, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		}).then((response) => {
			response.json().then((body) => {
				console.log("Success Response " + body);
				this.routeChange();
			})
		}, (error) => {
			console.log("Error is" + error);
		});
	}

	handleSubmit = e => {
		e.preventDefault();

		//username password validation
		//if validated successfully, redirect to home page
		//else popup message that wrong password
		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (Object.keys(errors).length !== 0) return;
		else {
			//server side validation
			switch (e.target.name) {
				case "loginForm":
					this.postLoginFormData(e.target);
					break;
				case "registerForm":
					this.postRegisterFormData(e.taget);
					break;
				case "complainForm":
					this.postComplainFormData(e.target);
					break;
			}
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
		const data = { ...this.state.data };
		data.type = e.currentTarget.value;
		this.setState({ data });
		console.log(data);
	};

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data });
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
		const { data, errors } = this.state;
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
		const { data, errors } = this.state;
		return (
			<DropDown
				options={options}
				value={data.type}
				onChange={this.handleSelect}
				error={errors.type}
			/>
		);
	}


}

export default Form;