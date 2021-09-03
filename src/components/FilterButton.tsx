import React from 'react';
import styled from 'styled-components';

interface FilterButtonProps {
  fn: Function;
  icon?: string;
  text?: string;
}

export default function FilterButton({ fn, icon, text }: FilterButtonProps) {
  return (
    <FilterButtonStyles
      onClick={() => fn()}
      className="filter__bar__button"
      type="button"
    >
      {!!icon && <span className="material-icons md-18">{icon}</span>}
      {!!text && text}
    </FilterButtonStyles>
  );
}

const FilterButtonStyles = styled.button`
  cursor: pointer;
  border-radius: 1.6rem;
  display: flex;
  align-items: center;
  border: none;
  background-color: var(--orange);
  color: var(--white);
  gap: 0.6rem;
  padding: 0.8rem 2rem;
`;
