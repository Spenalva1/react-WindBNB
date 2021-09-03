import styled from 'styled-components';
import { stays } from '../data/stays';
import { Stay } from '../lib/staysState';

const locations = Object.keys(
  stays.reduce((obj: any, stay: Stay) => {
    const location = `${stay.city}, ${stay.country}`;
    if (!obj[location]) {
      obj[location] = 1;
    }
    return obj;
  }, {})
);

interface LocationFilterProps {
  setLocation: Function;
}

export default function LocationFilter({ setLocation }: LocationFilterProps) {
  return (
    <LocationFilterStyles>
      <div>
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
    </LocationFilterStyles>
  );
}

const LocationFilterStyles = styled.div`
  padding: 4rem 2rem;
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
`;
