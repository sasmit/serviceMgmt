import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({cardTitle, cardMessage, cardColor, button1, button2, link, status}) => {
	return ( 
		<div className={cardColor}>
				{/* <img className="card-img-top" src={userHomePage} alt="" /> */}
				<div className="card-body">
					<h5 className="card-title">{cardTitle}</h5>
					<p className="card-text lead">{cardMessage}</p>
					<Link to={link} className="btn btn-primary">{button1}</Link>
					<button className={status}>{button2}</button>
				</div>
			</div>
	 );
}
 
export default Card;