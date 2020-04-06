import React from 'react';
import ButtonsGroup from '../shared/buttons-group/buttonsGroup.component';
import Input from '../shared/input';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Input descriptionLabel='Pomodoro numbers' defaultValue={4} />
				<Input descriptionLabel='Short Break' defaultValue={5} />
				<Input descriptionLabel='Long Break' defaultValue={15} />
				<Input descriptionLabel='Pomodoro Duration' defaultValue={35} />
				<ButtonsGroup />
			</React.Fragment>
		);
	}
}

export default HomePage;
