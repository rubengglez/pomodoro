import React from 'react';

function Input({descriptionLabel, value, name, onChange}) {
	const onChangeValue = (event) => onChange(event.target.value, name);

	return (
		<div className={`genericInput`}>
			<label>{descriptionLabel}</label>
			<input type='text' value={value} onChange={onChangeValue} />
		</div>
	);
}

export default Input;
