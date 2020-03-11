import React, { Component } from 'react';
import Input from './input';
import DropDown from './dropdown';
import '../styles/login.css';

class Form extends Component {
	state = {
		data: {}
	}

	handleSubmit = e => {
		e.preventDefault();

		//username password validation
		//if validated successfully, redirect to home page
		//else popup message that wrong password
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
			let path = '/userhome';
				this.props.history.push(path);
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
				onClick={this.routeChange}
			>{label}
			</button>
		);
	}

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

	renderDropDown(options) {
		const { data } = this.state;
		return (
			<DropDown
				options={options}
				value ={data.type}
				onChange={this.handleSelect}
			/>
		);
	}


}

export default Form;