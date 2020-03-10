import React from 'react';
import Header from '../common/header';
import Form from '../common/form';
import registerImg from "../images/register.svg";

class RegisterForm extends Form {
	state = {
		data: {
			username: '',
			password: ''
		}
	};

	render() {

		return (
		<div>
			<Header text="Register" image={registerImg}/>
			<div className="col-md-3 mx-auto">
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password")}
					{this.renderInput("email", "Email")}
					{this.renderButton("Register")}
				</form>
			</div>
		</div>
		);
	}
}
 
export default RegisterForm;