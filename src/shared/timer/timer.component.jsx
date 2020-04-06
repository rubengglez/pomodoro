import React from 'react';
import TimerUI from './timerUI';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: this.props.duration,
		};
		this.startCountdown();
	}

	startCountdown() {
		const intervalIdentifier = setInterval(() => {
			const currentTime = this.state.currentTime;
			if (currentTime < 1) {
				clearInterval(intervalIdentifier);
			}
			this.setState(() => ({
				currentTime: currentTime - 1000,
			}));
		}, 1000);
	}

	render() {
		return <TimerUI time={this.state.currentTime} />;
	}
}

export default Timer;
