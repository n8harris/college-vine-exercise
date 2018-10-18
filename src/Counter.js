import React from 'react';
import './Counter.css';

const Counter = props => (
  <span className='Counter'>{props.counterVal}</span>
);

export default Counter;