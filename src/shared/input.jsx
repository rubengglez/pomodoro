import React from 'react';

function Input({descriptionLabel, defaultValue}) {
	return (
		<div className={`genericInput`}>
			<label>{descriptionLabel}</label>
			<input type='text' defaultValue={defaultValue} />
		</div>
	);
}

export default Input;
