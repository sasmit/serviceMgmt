import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Form from '../common/form';
import loginImg from "../images/login.svg";

class LoginForm extends Form {

	state ={
		data: {
			username: '',
			password: '',
			type: 0,
			form: "login"
		}
	};

	render() {
		const options = ["Choose", "Product Owner", "Customer", "Vendor"];
		return (
		<div>
			<Header text="Login" image={loginImg}/>
			<div className="col-md-3 mx-auto">
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("username", "Username", "text")}
					{this.renderInput("password", "Password", "password")}
					{/* currently login data is not available.
						so for now adding dropdown to know the type of login. */}
					{this.renderDropDown(options)}
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