import React from 'react';
import ButtonsGroup from '../../shared/buttons-group/buttonsGroup.component';
import LinkWithImage from '../../shared/linkWithImage.component';
import SlackSettingsPage from './slack.settings.page';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class SettingsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Switch>
				<Route exact path='/settings/slack'>
					<SlackSettingsPage />
				</Route>
				<Route exact path='/settings'>
					<LinkWithImage imageName='slack' routeLink='/settings/slack' />
					<ButtonsGroup reset />
				</Route>
			</Switch>
		);
	}
}

export default SettingsPage;
