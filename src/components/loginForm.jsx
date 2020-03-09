import React from 'react';
import Header from '../common/header';
import Form from '../common/form';
import loginImg from "../images/login.svg";

class LoginForm extends Form {

	state = {
		data: {
			username: '',
			password: ''
		}
	};

	render() {

		return (
		<div>
			<Header text="Login" image={loginImg}/>
			<div className="col-md-3 mx-auto">
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password")}
					{this.renderButton("Login")}
				</form>
			</div>
		</div>
		);
	}
}
 
export default LoginForm;