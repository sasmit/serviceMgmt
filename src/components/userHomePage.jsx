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
						cardMessage="some quick example text to build on the card title and make up the bulk of the card's content."
						button="CREATE"
						link="/complaint"
					/>
				</div>
				<div className="col">
					<Card 
						cardTitle="Welcome,"
						cardMessage="some quick example text to build on the card title and make up the bulk of the card's content."
						button="CREATE"
						link="/complaint"
					/>
				</div>
			</div>
		</div>);
	}
}

export default UserHomePage;