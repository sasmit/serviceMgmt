import React from 'react';
import Header from '../common/header';
import Form from '../common/form';
import registerImg from "../images/register.svg";

class RegisterForm extends Form {

	state = {
		data: {
			username: '',
			password: '',
			email: '',
			type: 0,
			form: "register"
		},
		errors: {}
	};

	validate = () => {
		const errors = {};
		const { data } = this.state;
		if (data.username.trim() === "")
			errors.username = "Username is required";
		if (data.password.trim() === "")
			errors.password = "Password is required";
		if (data.email.trim() === "")
			errors.email = "Email is required";
		if (data.type === 0)
			errors.type = "Choose type";

		return Object.keys(errors) === 0 ? null : errors;
	};

	render() {
		const options = ["Choose...", "Product Owner", "Customer", "Vendor"];
		return (
			<div>
				<Header text="Register" image={registerImg} />
				<div className="col-md-3 mx-auto">
					<form name="registerForm" onSubmit={this.handleSubmit}>
						{this.renderInput("username", "Username", "text")}
						{this.renderInput("password", "Password", "password")}
						{this.renderInput("email", "Email", "email")}
						{this.renderDropDown(options)}
						{this.renderButton("Register")}
					</form>
				</div>
			</div>
		);
	}
}

export default RegisterForm;