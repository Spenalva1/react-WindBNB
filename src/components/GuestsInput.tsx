import React from 'react';
import styled from 'styled-components';

interface GuestsInputProps {
  guests: number;
  onClick: Function;
  className?: string;
}

export default function GuestsInput({
  guests,
  onClick,
  className,
}: GuestsInputProps) {
  return (
    <GuestsInputStyles onClick={() => onClick()} className={className}>
      <label className="filter__bar__item__label">GUESTS</label>
      {guests > 0 ? (
        <p className="filter__bar__item__value">{guests}</p>
      ) : (
        <p className="filter__bar__item__value empty">Add guests</p>
      )}
    </GuestsInputStyles>
  );
}

const GuestsInputStyles = styled.div`
  cursor: pointer;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  justify-content: center;

  &.active {
    border: 1px solid var(--black);
    border-radius: 1.6rem;
  }

  &:last-child {
    border-right: none;
    cursor: unset;
  }

  &__label {
    font-size: 0.9rem;
    font-weight: 800;
    line-height: 1.13;
  }

  &__value.empty {
    color: var(--lightGrey);
  }
`;
