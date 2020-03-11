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
	};

	routeChange = () => {
		if (this.state.data.type === "1") {
			let path = '/ownerhome';
			this.props.history.push(path);
		} else if (this.state.data.type === "2") {
			let path = '/userhome';
			this.props.history.push(path);
		} else if (this.state.data.type === "3") {
			let path = '/vendorhome';
			this.props.history.push(path);
		}
	};

	handleChange = ({ currentTarget: input }) => {
		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data });
	};

	handleSelect = (e) => {
		console.log("option selected");
		const data = {...this.state.data};
		data.type = e.currentTarget.value;
		this.setState({data});
		console.log(data);
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

	renderDropDown(option1, option2, option3) {
		const { data } = this.state;
		return (
			<DropDown
				option1={option1}
				option2={option2}
				option3={option3}
				value ={data.type}
				onChange={this.handleSelect}
			/>
		);
	}


}

export default Form;