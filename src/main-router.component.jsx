import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import SettingsPage from './pages/settings/settings.page';
import HomePage from './pages/home.page';

export default function MainRouter() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/settings'>Settings</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path='/settings'>
						<SettingsPage />
					</Route>
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
