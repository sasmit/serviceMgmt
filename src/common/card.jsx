import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({cardTitle, cardMessage, button, link}) => {
	return ( 
		<div className="card">
				{/* <img className="card-img-top" src={userHomePage} alt="" /> */}
				<div className="card-body">
					<h5 className="card-title diaplay-4">{cardTitle}</h5>
					<p className="card-text">{cardMessage}</p>
					<Link to={link} className="btn btn-primary">{button}</Link>
				</div>
			</div>
	 );
}
 
export default Card;