import React, { useState } from 'react';

const Counter: React.FC = () => {

	const [count, setCount] = useState(0);

	const onIncrease = () => {
		setCount((c) => c + 1);
	};

	const onDecrease = () => {
		setCount((c) => c - 1);
	};

	return (
		<div>
			<h1>Counter</h1>
			<h2>{count}</h2>
			<button onClick={onIncrease}>+</button>
			<button onClick={onDecrease}>-</button>
		</div>
	);
};

export default Counter;