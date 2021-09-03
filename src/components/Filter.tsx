import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  IFilter as FilterType,
  initialFilter,
  useFilter,
} from '../lib/filterState';
import LocationFilter from './LocationFilter';
import GuestsFilter from './GuestsFilter';
import { useCallback } from 'react';
import FilterButton from './FilterButton';
import LocationInput from './LocationInput';
import GuestsInput from './GuestsInput';
import useWidth from '../lib/useWidth';

const FILTER_WIDTH_BREAKPOINT = 650;

const handleWidth = (width: number) => width <= FILTER_WIDTH_BREAKPOINT;

export default function Filter() {
  const { filter, setFilter, closeFilter, resetFilter } = useFilter();
  const { width } = useWidth();
  const [localFilter, setLocalfilter] = useState<FilterType>(() => {
    return {
      guests: filter.guests,
      location: filter.location,
    };
  });
  const [activeFilter, setActiveFilter] = useState<1 | 2>(1);
  const [mobile, setMobile] = useState<boolean>(() => handleWidth(width));

  useEffect(() => {
    setMobile(handleWidth(width));
  }, [width]);

  const onSearch = () => {
    setFilter(localFilter);
    closeFilter();
  };

  const onReset = () => {
    setLocalfilter(initialFilter);
    resetFilter();
    closeFilter();
  };

  const setLocation = (location: string) => {
    setLocalfilter((filter: FilterType) => ({
      ...filter,
      location,
    }));
  };

  const setGuests = useCallback((guests: number) => {
    setLocalfilter((filter: FilterType) => ({
      ...filter,
      guests,
    }));
  }, []);

  return (
    <FilterStyles>
      <div className={`filter__bar filter__row ${mobile && 'mobile'}`}>
        <LocationInput
          location={localFilter.location}
          onClick={() => setActiveFilter(1)}
          className={activeFilter === 1 ? 'active' : ''}
        />
        <GuestsInput
          guests={localFilter.guests}
          onClick={() => setActiveFilter(2)}
          className={activeFilter === 2 ? 'active' : ''}
        />
        {!mobile && (
          <div className="filter__bar__item filter__bar__button-ctn">
            <FilterButton fn={onSearch} icon={'search'} text={'Search'} />
            <FilterButton fn={onReset} icon={'close'} text={'Reset'} />
          </div>
        )}
      </div>
      {!mobile && (
        <div className="filter__selects filter__row">
          <div>
            {activeFilter === 1 && <LocationFilter setLocation={setLocation} />}
          </div>
          <div>
            {activeFilter === 2 && <GuestsFilter setGuests={setGuests} />}
          </div>
          <div></div>
        </div>
      )}
      {mobile && (
        <div className="filter__selects mobile">
          {activeFilter === 1 && <LocationFilter setLocation={setLocation} />}
          {activeFilter === 2 && <GuestsFilter setGuests={setGuests} />}
        </div>
      )}
      {mobile && (
        <div className="mobile filter__bar__item filter__bar__button-ctn">
          <FilterButton fn={onSearch} icon={'search'} text={'Search'} />
          <FilterButton fn={onReset} icon={'close'} text={'Reset'} />
        </div>
      )}
    </FilterStyles>
  );
}

const FilterStyles = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Mulish', sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  .filter__row {
    width: 100%;
    display: flex;

    & > * {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0.7rem 2rem;
    }
  }

  .filter__selects.mobile {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .filter__bar {
    box-shadow: var(--bs);
    border-radius: 1.6rem;
    font-size: 1.3rem;

    &__item {
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
    }

    &__button-ctn {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
      width: 100%;
      align-self: flex-end;
    }

    &.mobile {
      flex-direction: column;
    }
  }

  .select__wrapper {
    padding: 4rem 2rem;
  }
`;
