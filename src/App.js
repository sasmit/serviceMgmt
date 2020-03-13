import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import UserHomePage from './components/userHomePage';
import VendorHomePage from './components/vendorHomePage';
import OwnerHomePage from './components/ownerHomePage';
import ComplaintForm from './components/complaintForm';
import UserTracking from './components/userTracking';
import Information from './components/informationPage';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<main className="container">
				<Switch>
					<Route path='/info' component={Information}/>
					<Route path='/usertracking' component={UserTracking} />
					<Route path='/ownerhome' component={OwnerHomePage} />
					<Route path='/vendorhome' component={VendorHomePage} />
					<Route path='/complaint' component={ComplaintForm} />
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
