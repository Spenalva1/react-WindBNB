import React, { useState } from 'react';
import styled from 'styled-components';

interface CounterProps {
  counter: number;
  setCounter: Function;
}

export default function Counter({ counter, setCounter }: CounterProps) {
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <CounterStyles>
      <button onClick={decrease} className="counter__button">
        -
      </button>
      <span className="counter__counter">{counter}</span>
      <button onClick={increase} className="counter__button">
        +
      </button>
    </CounterStyles>
  );
}

const CounterStyles = styled.div``;
