import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import UserHomePage from './components/userHomePage';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<main className="container">
				<Switch>
					<Route path='/userhome' component={UserHomePage}/>
					<Route path='/register' component={RegisterForm}/>
					<Route path='/login' component={LoginForm}/>
					<Redirect exact from="/" to="/login"/>
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
