import React, { useState } from 'react';
import styled from '@emotion/styled';

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
			<StyledWrap>{count}</StyledWrap>
			<button onClick={onIncrease}>+</button>
			<button onClick={onDecrease}>-</button>
		</div>
	);
};

export default Counter;

const StyledWrap = styled.h2`
  background-color: hotpink;
  div {
    font-size: 24px;
  }
`;