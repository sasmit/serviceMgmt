import React from 'react';
import '../styles/login.css';

const Header = ({ text, image }) => {
	return (
		<div className="header">
			<h2 className="display-4 font-weight-bold text-center">{text}</h2>
			<img className="image rounded mx-auto d-block" src={image} alt="" />
		</div>
	);
}

export default Header;