import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({cardTitle, cardMessage, cardColor, button1, button2, link, fetchInfo, status, onClick, isDisabled}) => {
	return ( 
		<div className={cardColor}>
				{/* <img className="card-img-top" src={userHomePage} alt="" /> */}
				<div className="card-body">
					<h5 className="card-title">{cardTitle}</h5>
					<p className="card-text lead">{cardMessage}</p>
					<Link to={link} onClick={fetchInfo} className="btn btn-primary">{button1}</Link>
					<button onClick={onClick} className={status} disabled={isDisabled}>{button2}</button>
				</div>
			</div>
	 );
}
 
export default Card;