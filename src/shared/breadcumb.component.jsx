import React from 'react';

function Breadcumb({currentItem, totalItems, item = 'pomodoro'}) {
	return (
		<div className='breadcumb'>
			<p>
				<span className='currentItem'>{currentItem}</span>/<span>{totalItems}</span> {item}
			</p>
		</div>
	);
}

export default Breadcumb;
