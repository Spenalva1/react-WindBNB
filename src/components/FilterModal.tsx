import { useEffect } from 'react';
import styled from 'styled-components';
import { useFilter } from '../lib/filterState';
import { ContainerStyles } from '../styles/GlobalStyles';
import Filter from './Filter';

export default function FilterModal() {
  const { filterOpen, closeFilter } = useFilter();

  useEffect(() => {
    if (filterOpen) {
      const scrollY =
        document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
    } else {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [filterOpen]);

  return (
    <FilterModalStyles open={filterOpen} onClick={() => closeFilter()}>
      <div className="filter__layer"></div>
      <div
        className="filter__content"
        onClick={(e: any) => {
          (e as Event).stopPropagation();
        }}
      >
        <ContainerStyles>
          <Filter />
        </ContainerStyles>
      </div>
    </FilterModalStyles>
  );
}

const FilterModalStyles = styled.div`
  .filter__layer {
    position: fixed;
    display: ${({ open }: { open: Boolean }) => (open ? 'block' : 'none')};
    background: ${({ open }: { open: Boolean }) =>
      open ? '#4f4f4f40' : 'transparent'};
    transition: all 0.5s ease-in-out;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50;
  }

  .filter__content {
    z-index: 51;
    position: fixed;
    width: 100%;
    height: 460px;
    background-color: white;
    top: 0;
    transform: translateY(-100%);
    transform: ${({ open }: { open: Boolean }) =>
      open ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.5s ease-in-out;
    border-bottom: 1px solid #bdbdbd;

    > * {
      height: 100%;
    }

    @media screen and (max-width: 65rem) {
      height: 600px;
    }
  }
`;
