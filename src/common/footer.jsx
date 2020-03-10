import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Footer = ({ text, path, linkText }) => {
	return (
		<div className="footer text-center">
			<p>{text}<Link to={path}>{linkText}</Link></p>
		</div>
	);
}

export default Footer;