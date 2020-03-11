import React from 'react';
import Header from '../common/header';
import Form from '../common/form';
import registerImg from "../images/register.svg";

class RegisterForm extends Form {

	state ={
		data: {
			username: '',
			password: '',
			type: 0,
			form: "register"
		}
	};

	render() {
		const options = ["Choose...", "Product Owner", "Customer", "Vendor"];
		return (
		<div>
			<Header text="Register" image={registerImg}/>
			<div className="col-md-3 mx-auto">
				<form onSubmit={this.handleSubmit}>
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