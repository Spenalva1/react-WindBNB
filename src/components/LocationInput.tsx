import React from 'react';
import styled from 'styled-components';

interface LocationInputProps {
  location: string;
  onClick: Function;
  className?: string;
}

export default function LocationInput({
  location,
  onClick,
  className,
}: LocationInputProps) {
  return (
    <LocationInputStyles onClick={() => onClick()} className={className}>
      <label className="filter__bar__item__label">LOCATION</label>
      {!!location && location.length ? (
        <p className="filter__bar__item__value">{location}</p>
      ) : (
        <p className="filter__bar__item__value empty">Add location</p>
      )}
    </LocationInputStyles>
  );
}

const LocationInputStyles = styled.div`
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
