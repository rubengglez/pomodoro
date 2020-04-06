import React from 'react';
import classNames from 'classnames';
import Button from './button.component';

export default function ButtonsGroup(props) {
	const resetBtnClasses = classNames({
		hidden: !props.reset,
		'btn btn-reset': props.reset,
		asLink: props.asLink,
	});
	const startBtnClass = classNames({
		hidden: !props.start,
		'btn btn-start': props.start,
	});
	return (
		<div className='container-groupButtons'>
			<Button title='reset' className={resetBtnClasses} />
			<Button title='start' className={startBtnClass} />
		</div>
	);
}
