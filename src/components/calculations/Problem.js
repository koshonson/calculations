import React from 'react';

const Problem = () => {
	return (
		<div className="problem centered">
			<span className="problem-expression">81 / 9 = </span>
			<span
				className="problem-result"
				contentEditable
				suppressContentEditableWarning
			>
				9
			</span>
		</div>
	);
};

export default Problem;
