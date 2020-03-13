import React from 'react';
import Header from '../common/header';
import Form from '../common/form';
import createIssueForm from "../images/createIssueForm.svg";
import '../styles/login.css';

class ComplaintForm extends Form {

	state = {
		data: {
			title: '',
			description: '',
			type: 0,
			form: "complaint"
		},
		errors: {}
	};

	validate = () => {
		const errors = {};
		const { data } = this.state;
		if (data.title.trim() === "")
			errors.title = "Title is required";
		if (data.description.trim() === "")
			errors.description = "Description is required";
		if (data.type === 0)
			errors.type = "Choose type";

		return Object.keys(errors) === 0 ? null : errors;
	};

	render() {
		const options = ["Choose...", "HardWare", "Software", "Other"];
		return (
			<div>
				<Header text="Registe your Complaint" image={createIssueForm} />
				<div className="col-md-7 mx-auto">
					<form name="complainForm" onSubmit={this.handleSubmit}>
						<h5>Select the type of complaint here.</h5>
						{this.renderDropDown(options)}
						{this.renderInput("title", "Title", "text")}
						{this.renderInput("description", "Desciption", "text")}
						{this.renderButton("Register")}
					</form>
				</div>
			</div>
		);
	}
}

export default ComplaintForm;