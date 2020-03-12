import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import UserHomePage from './components/userHomePage';
import VendorHomePage from './components/vendorHomePage';
import OwnerHomePage from './components/ownerHomePage';
import ComplianForm from './components/complaintForm';
import UserTracking from './components/userTracking';
import sideBar from './components/sideBar';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<main className="container">
				<Switch>
					<Route path='/usertracking' component={UserTracking} />
					<Route path='/ownerhome' component={sideBar} />
					<Route path='/vendorhome' component={VendorHomePage} />
					<Route path='/complaint' component={ComplianForm} />
					<Route path='/userhome' component={UserHomePage} />
					<Route path='/register' component={RegisterForm} />
					<Route path='/login' component={LoginForm} />
					<Redirect exact from="/" to="/login" />
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default App;
