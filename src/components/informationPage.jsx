import React, { Component } from 'react';
import Header from '../common/header';
import informationImg from '../images/information.svg'

class Information extends Component {
	render() { 
		return ( 
			<Header text="Track your issues here" image={informationImg} />
		);
	}
}
 
export default Information;