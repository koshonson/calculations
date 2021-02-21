import React from 'react';
import { CgAlarm } from 'react-icons/cg';

const Timer = () => {
	return (
		<div className="timer">
			<div className="time">32s</div>
			<CgAlarm
				style={{ marginLeft: '0.25em', marginRight: '0.5em' }}
				className="tick"
			/>
		</div>
	);
};

export default Timer;
