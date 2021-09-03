import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import Counter from './Counter';

interface GuestsFilterProps {
  setGuests: Function;
}

export default function GuestsFilter({ setGuests }: GuestsFilterProps) {
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);

  useEffect(() => {
    setGuests(childrenCount + adultCount);
  }, [childrenCount, adultCount, setGuests]);

  return (
    <GuestsFilterStyles>
      <div className="filter__select">
        <div className="filter__select__guests__item">
          <label className="filter__label">Adults</label>
          <span className="filter__info">Ages 12 or above</span>
          <Counter
            counter={childrenCount}
            setCounter={setChildrenCount}
          ></Counter>
        </div>
        <div className="filter__select__guests__item">
          <label className="filter__label">Children</label>
          <span className="filter__info">Ages 2-12</span>
          <Counter counter={adultCount} setCounter={setAdultCount}></Counter>
        </div>
      </div>
    </GuestsFilterStyles>
  );
}

const GuestsFilterStyles = styled.div`
  padding: 4rem 2rem;
  .filter__select__guests__item {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }

  .filter__label {
    font-size: 1.4rem;
    font-weight: 800;
    line-height: 1.8rem;
  }

  .filter__info {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: var(--lightGrey);
    margin-bottom: 0.5rem;
  }
`;
