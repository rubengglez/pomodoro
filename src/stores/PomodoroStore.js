import {observable, action} from 'mobx';

const getMillisecondsFromMinutes = (minutes) => minutes * 60 * 1000;

const DEFAULT_VALUES = {
	numOfPomodoros: 0,
	shortBreak: getMillisecondsFromMinutes(5),
	longBreak: getMillisecondsFromMinutes(15),
	pomodoroTimer: getMillisecondsFromMinutes(25),
	statusPomodoro: 'inactive',
	statusBreak: 'inactive',
};

class PomodoroStore {
	@observable numOfPomodoros;
	@observable shortBreak;
	@observable longBreak;
	@observable pomodoroTimer;
	@observable statusPomodoro;
	@observable statusBreak;

	constructor() {
		this.setDefaultValues();
	}

	setDefaultValues() {
		for (const key in DEFAULT_VALUES) {
			this[key] = DEFAULT_VALUES[key];
		}
	}

	@action.bound
	setNumOfPomodoros(nums) {
		this.numOfPomodoros = nums;
	}

	@action
	setShortBreak(minutes) {
		this.shortBreak = getMillisecondsFromMinutes(minutes);
	}

	@action
	setLongBreak(minutes) {
		this.longBreak = getMillisecondsFromMinutes(minutes);
	}

	@action
	setPomodoroTimer(minutes) {
		this.pomodoroTimer = getMillisecondsFromMinutes(minutes);
	}

	@action
	activePomodoro() {
		this.statusPomodoro = 'active';
		this.statusBreak = 'inactive';
	}

	@action
	finishPomodoro() {
		this.statusPomodoro = 'inactive';
	}

	@action
	finishBreak() {
		this.statusBreak = 'inactive';
	}

	@action
	activeBreak() {
		this.statusBreak = 'active';
		this.statusPomodoro = 'inactive';
	}

	@action
	reset() {
		this.setDefaultValues();
	}
}

export const pomodoroStore = new PomodoroStore();
