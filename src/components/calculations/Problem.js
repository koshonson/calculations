import React, { useState, useRef } from 'react';

const Problem = ({ id }) => {
	const [result, setResult] = useState(8);
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
			(+target.value || +target.value === 0)
		) {
			setInput(parseInt(target.value.slice(0, 3)));
		}
	};

	const handleEnterSubmit = ({ key, target }) => {
		if (key !== 'Enter') return;
		target.blur();
		focusNext(target.id);
	};

	const handleBlurSubmit = () => {
		container.current.classList.remove('focused');
		if (input || input === 0) {
			setSubmitted(true);
			setCorrect(result === input);
			// updateProgress(result === input);
		}
	};

	const handleFocus = ({ target }) => {
		container.current.classList.add('focused');
		if (submitted) focusNext(target.id);
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
			<span className="problem-expression">81 / 9 = </span>
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
