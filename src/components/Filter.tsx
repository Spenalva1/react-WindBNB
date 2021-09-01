import { useState } from 'react';
import styled from 'styled-components';
import {
  Filter as FilterType,
  initialFilter,
  useFilter,
} from '../lib/filterState';
import { stays } from '../data/stays';
import { Stay } from '../lib/staysState';
import { useEffect } from 'react';
import Counter from './Counter';

const locations = Object.keys(
  stays.reduce((obj: any, stay: Stay) => {
    const location = `${stay.city}, ${stay.country}`;
    if (!obj[location]) {
      obj[location] = 1;
    }
    return obj;
  }, {})
);

export default function Filter() {
  const { filter, setFilter, closeFilter } = useFilter();
  const [localFilter, setLocalfilter] = useState<FilterType>(() => {
    return {
      guests: filter.guests,
      location: filter.location,
    };
  });
  const [childrenCount, setChildrenCount] = useState(0);
  const [adultCount, setAdultCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState<1 | 2>(1);

  useEffect(() => {
    setLocalfilter((filter: FilterType) => ({
      ...filter,
      guests: childrenCount + adultCount,
    }));
  }, [childrenCount, adultCount]);

  const onSearch = () => {
    setFilter(localFilter);
    closeFilter();
  };

  const onReset = () => {
    setFilter(initialFilter);
    closeFilter();
  };

  const setLocation = (location: string) => {
    setLocalfilter((filter: FilterType) => ({
      ...filter,
      location,
    }));
  };

  return (
    <FilterStyles>
      <div className="filter__bar filter__row">
        <div
          onClick={() => setActiveFilter(1)}
          className={`filter__bar__item ${activeFilter === 1 ? 'active' : ''}`}
        >
          <label className="filter__bar__item__label">LOCATION</label>

          {localFilter.location && !!localFilter?.location?.length ? (
            <p className="filter__bar__item__value">{localFilter.location}</p>
          ) : (
            <p className="filter__bar__item__value empty">Add location</p>
          )}
        </div>
        <div
          onClick={() => setActiveFilter(2)}
          className={`filter__bar__item ${activeFilter === 2 ? 'active' : ''}`}
        >
          <label className="filter__bar__item__label">GUESTS</label>
          {localFilter.guests && localFilter?.guests > 0 ? (
            <p className="filter__bar__item__value">{localFilter.guests}</p>
          ) : (
            <p className="filter__bar__item__value empty">Add guests</p>
          )}
        </div>
        <div className="filter__bar__item filter__bar__button-ctn">
          <button
            onClick={onSearch}
            className="filter__bar__button"
            type="button"
          >
            <span className="material-icons md-18">search</span>
            Search
          </button>
          <button
            onClick={onReset}
            className="filter__bar__button"
            type="button"
          >
            <span className="material-icons md-18">close</span>
            Reset
          </button>
        </div>
      </div>
      <div className="filter__selects filter__row">
        <div className="select__wrapper">
          {activeFilter === 1 && (
            <div className="filter__select">
              {locations.map((location) => (
                <div
                  key={location}
                  onClick={() => setLocation(location)}
                  className="filter__select__location__item"
                >
                  <span className="material-icons md-18">place</span>
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="select__wrapper">
          {activeFilter === 2 && (
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
                <Counter
                  counter={adultCount}
                  setCounter={setAdultCount}
                ></Counter>
              </div>
            </div>
          )}
        </div>
        <div></div>
      </div>
    </FilterStyles>
  );
}

const FilterStyles = styled.div`
  width: 100%;
  font-family: 'Mulish', sans-serif;

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
      align-items: center;
    }

    &__button {
      cursor: pointer;
      border-radius: 1.6rem;
      display: flex;
      align-items: center;
      border: none;
      background-color: var(--orange);
      color: var(--white);
      gap: 0.6rem;
      padding: 0 2rem;
      height: 100%;
    }
  }

  .filter__bar__button-ctn {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .select__wrapper {
    padding: 4rem 2rem;
  }

  .filter__select__location__item {
    cursor: pointer;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    color: #4f4f4f;
    span {
      margin-right: 0.5rem;
    }
  }

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
  }
`;
