import React from 'react';
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

const CounterStyles = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;

    :last-child {
      margin-right: 0;
    }
  }

  .counter__button {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background: white;
    border: 1px solid var(--grey);
    color: var(--grey);
    border-radius: 0.4rem;
  }

  .counter__counter {
    font-weight: 700;
  }
`;
