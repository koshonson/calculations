import React, { useState, useEffect } from 'react';
import { CgAlarm } from 'react-icons/cg';

const Timer = ({ progress }) => {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(null);

	useEffect(() => {
		const tickSec = () => setTime(time + 1);
		const { count, done } = progress;
		console.log(count, done);
		if (count !== done) {
			setTimer(setTimeout(tickSec, 1000));
		} else {
			clearTimeout(timer);
			setTimer(null);
		}
	}, [time, progress]);

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
