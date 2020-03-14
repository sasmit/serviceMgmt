import React, { Component } from 'react';
import Header from '../common/header';
import Card from '../common/card';
import userHomePage from '../images/userHomePage.svg';

class UserHomePage extends Component {

	render() {
		return (<div>
			<Header text="User Dashboard" image={userHomePage} />
			<div className="row rowStyle">
				<div className="col">
					<Card 
						cardTitle="Welcome,"
						cardMessage="Do you have a Consumer Grievance? Please Raise your complaint by clicking create button."
						cardColor="card"
						button1={["CREATE"]}
						status="d-none"
						link="/complaint"
					/>
				</div>
				<div className="col">
					<Card 
						cardTitle="Hello,"
						cardMessage="Want to know the status of your complained? click track button."
						cardColor="card"
						button1={["TRACK"]}
						status="d-none"
						link="/usertracking"
					/>
				</div>
			</div>
		</div>);
	}
}

export default UserHomePage;