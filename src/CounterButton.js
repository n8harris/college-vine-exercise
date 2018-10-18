import React from 'react';
import './CounterButton.css';

const CounterButton = props => (
  <button
    onClick={props.incrementCounter}
    className={props.dropShadowStyleActive ? 'CounterButtonDrop' : 'CounterButton'}
    style={{background: props.backgroundColor}}>
      Click me
  </button>
);

export default CounterButton;
