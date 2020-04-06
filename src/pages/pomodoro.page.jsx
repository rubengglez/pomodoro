import React from 'react';
import ButtonsGroup from '../shared/buttons-group/buttonsGroup.component';
import Timer from '../shared/timer/timer.component';
import Breadcumb from '../shared/breadcumb.component';

class PomodoroPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Breadcumb currentItem={1} totalItems={4} />
				<Timer duration={10000} />
				<ButtonsGroup start />
			</React.Fragment>
		);
	}
}

export default PomodoroPage;
