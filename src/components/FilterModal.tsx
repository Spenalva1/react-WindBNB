import styled from 'styled-components';
import { useFilter } from '../lib/filterState';
import { ContainerStyles } from '../styles/GlobalStyles';
import Filter from './Filter';

export default function FilterModal() {
  const { filterOpen, closeFilter } = useFilter();
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
  /* display: ${({ open }: { open: Boolean }) => (open ? 'block' : 'none')}; */

  .filter__layer {
    position: absolute;
    display: ${({ open }: { open: Boolean }) => (open ? 'block' : 'none')};
    background: ${({ open }: { open: Boolean }) =>
      open ? '#4f4f4f40' : 'transparent'};
    transition: all 0.5s ease-in-out;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* background-color: #4f4f4f; */
    z-index: 50;
  }

  .filter__content {
    z-index: 51;
    position: absolute;
    width: 100%;
    height: 460px;
    background-color: white;
    top: 0;
    transform: translateY(-100%);
    transform: ${({ open }: { open: Boolean }) =>
      open ? 'translateY(0)' : 'translateY(-100%)'};
    transition: 0.5s ease-in-out;
    border-bottom: 1px solid #bdbdbd;
  }
`;
