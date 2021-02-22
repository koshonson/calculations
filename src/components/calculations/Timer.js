import React from 'react';
import { CgAlarm } from 'react-icons/cg';

const Timer = ({ time, timer }) => {
	return (
		<div className="timer">
			<div className="time">{time}s</div>
			<CgAlarm
				style={{ marginLeft: '0.25em', marginRight: '0.5em' }}
				className={timer ? 'tick' : null}
			/>
		</div>
	);
};

export default Timer;
