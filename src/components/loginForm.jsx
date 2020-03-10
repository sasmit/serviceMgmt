import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Form from '../common/form';
import loginImg from "../images/login.svg";

class LoginForm extends Form {
	render() {
		return (
			<div>
				<Header text="Login" image={loginImg} />
				<div className="col-md-3 mx-auto">
					<form onSubmit={this.handleSubmit}>
						{this.renderInput("username", "Username", "text")}
						{this.renderInput("password", "Password", "password")}
						{this.renderButton("Login")}
					</form>
				</div>
				<Footer
					text="Not yet register, please click "
					path="/register"
					linkText="here"
				/>
			</div>
		);
	}
}

export default LoginForm;