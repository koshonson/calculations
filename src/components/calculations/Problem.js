import React, { useState, useRef } from 'react';

const Problem = ({
	id,
	expression,
	result,
	progress: { done, count },
	updateProgress
}) => {
	const [input, setInput] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [correct, setCorrect] = useState(null);

	const container = useRef();

	const focusNext = id => {
		const next = document.getElementById(+id + 1);
		if (next) {
			next.focus();
		} else {
			document.getElementById(1).focus();
		}
	};

	const handleChange = ({ target }) => {
		if (
			!submitted &&
			target.value !== ' ' &&
			(+target.value || +target.value === 0 || target.value === '')
		) {
			const value = parseInt(target.value.slice(0, 3));
			if (value || value === 0) setInput(value);
			if (isNaN(value)) setInput('');
		}
	};

	const handleEnterSubmit = ({ key, target }) => {
		if (key !== 'Enter') return;
		target.blur();
		if (count - 1 > done || (count - 1 === done && !input)) {
			focusNext(target.id);
		}
	};

	const handleFocus = ({ target }) => {
		if (submitted) {
			focusNext(target.id);
		} else {
			container.current.classList.add('focused');
		}
	};

	const handleBlurSubmit = ({ target }) => {
		container.current.classList.remove('focused');
		if (!submitted && (input || input === 0)) {
			setSubmitted(true);
			setCorrect(result === input);
			updateProgress(result === input);
		}
	};

	const getDivClassnames = () => {
		let baseClassnames = 'problem centered';
		if (submitted) {
			return (baseClassnames += correct ? ' correct' : ' wrong');
		}
		return baseClassnames;
	};

	const getInputClassnames = () => {
		return !submitted ? 'problem-result' : 'problem-result locked';
	};

	return (
		<div className={getDivClassnames()} ref={container}>
			<span className="problem-expression">{expression} = </span>
			<input
				className={getInputClassnames()}
				type="text"
				id={id}
				value={input}
				onChange={e => handleChange(e)}
				onKeyUp={e => handleEnterSubmit(e)}
				onBlur={e => handleBlurSubmit(e)}
				onFocus={e => handleFocus(e)}
			></input>
		</div>
	);
};

export default Problem;
