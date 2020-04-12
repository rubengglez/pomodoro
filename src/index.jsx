import '../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './main-router.component';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import {pomodoroStore} from './stores/PomodoroStore';

configure({enforceActions: 'always'});

const rootNode = document.getElementById('root');

class AppMain extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<MainRouter />
			</div>
		);
	}
}

ReactDOM.render(
	<Provider pomodoroStore={pomodoroStore}>
		<AppMain />
	</Provider>,
	rootNode
);
