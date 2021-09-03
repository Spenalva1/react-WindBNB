import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { stays as staysData } from '../data/stays';
import { useFilter } from './filterState';

export interface Stay {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

const LocalStateContext = createContext(staysData);
const LocalStateProvider = LocalStateContext.Provider;

const StaysStateProvider = ({ children }: { children: ReactNode }) => {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access ir via the consumer!
  const [filteredStays, setFilteredStays] = useState<Stay[]>(staysData);
  const { filter } = useFilter();

  useEffect(() => {
    console.log(filter.guests);
    setFilteredStays(
      staysData.filter((stay) => {
        const locationCheck =
          filter.location === '' || filter.location.includes(stay.city);
        const guestsCheck = filter.guests <= stay.maxGuests;
        return locationCheck && guestsCheck;
      })
    );
  }, [filter]);

  return (
    <LocalStateProvider value={filteredStays}>{children}</LocalStateProvider>
  );
};

// make a custom hook for accessing the filter local state
const useStays = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { StaysStateProvider, useStays };
