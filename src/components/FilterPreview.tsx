import styled from 'styled-components';
import { useFilter } from '../lib/filterState';

export default function FilterPreview() {
  const { filter, openFilter } = useFilter();
  return (
    <FilterPreviewStyles onClick={() => openFilter()}>
      <div className="filter__preview__element location">
        {filter.location && !!filter?.location?.length ? (
          <span>{filter.location}</span>
        ) : (
          <span className="empty">Add location</span>
        )}
      </div>
      <div className="filter__preview__element guests">
        {filter.guests && filter?.guests > 0 ? (
          <span>{filter.guests}</span>
        ) : (
          <span className="empty">Add guests</span>
        )}
      </div>
      <div className="filter__preview__element logo">
        <span className="material-icons md-18">search</span>
      </div>
    </FilterPreviewStyles>
  );
}

const FilterPreviewStyles = styled.div`
  height: 55px;
  cursor: pointer;
  display: flex;
  box-shadow: var(--bs);
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: 'Mulish', sans-serif;

  & > * {
    display: flex;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    padding: 15px 20px;

    &:last-child {
      border-right: none;
    }
  }

  .filter__preview__element .empty {
    color: var(--lightGrey);
  }

  .logo {
    color: var(--orange);
  }
`;
