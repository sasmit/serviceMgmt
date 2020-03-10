import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
// import './App.css';

function App() {
	return (
		<React.Fragment>
			<main className="container">
				<Switch>
					<Route path='/login' component={RegisterForm} />
					<Redirect exact from="/" to="/login" />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;