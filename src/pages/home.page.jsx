import React from 'react';
import ButtonsGroup from '../shared/buttons-group/buttonsGroup.component';
import Input from '../shared/input';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';

@inject('pomodoroStore')
@observer
class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onReset = this.onReset.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit() {
		console.log('>>>>>>>>>> what de fuc');
		const {history} = this.props;
		history.push('/settings');
	}

	onReset() {
		console.log('HomePage>>onReset');
		this.props.pomodoroStore.reset();
	}

	onChange(value, field) {
		console.log('HomePage>>>onChange', this.props.pomodoroStore);
		switch (field) {
			case 'numsOfPomodoro':
				return this.props.pomodoroStore.setNumOfPomodoros(value);
			case 'shortBreak':
				return this.props.pomodoroStore.setShortBreak(value);
			case 'longBreak':
				return this.props.pomodoroStore.setLongBreak(value);
			case 'pomodoroTimer':
				return this.props.pomodoroStore.setPomodoroTimer(value);
		}
	}

	render() {
		return (
			<React.Fragment>
				<Input
					name='numsOfPomodoro'
					descriptionLabel='Pomodoro numbers'
					onChange={this.onChange}
					value={this.props.pomodoroStore.numOfPomodoros}
				/>
				<Input
					name='shortBreak'
					descriptionLabel='Short Break'
					value={this.props.pomodoroStore.shortBreak}
					onChange={this.onChange}
				/>

				<Input
					name='longBreak'
					descriptionLabel='Long Break'
					value={this.props.pomodoroStore.longBreak}
					onChange={this.onChange}
				/>
				<Input
					name='pomodoroTimer'
					descriptionLabel='Pomodoro Duration'
					value={this.props.pomodoroStore.pomodoroTimer}
					onChange={this.onChange}
				/>
				<ButtonsGroup onSubmit={this.onSubmit} onReset={this.onReset} reset start />
			</React.Fragment>
		);
	}
}

export default withRouter(HomePage);
