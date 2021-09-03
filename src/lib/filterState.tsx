import { createContext, ReactNode, useContext, useState } from 'react';

export interface IFilter {
  location: string;
  guests: number;
}

export const initialFilter: IFilter = {
  location: '',
  guests: 0,
};

interface ContextProps {
  filterOpen: boolean;
  filter: IFilter;
  openFilter: Function;
  closeFilter: Function;
  toggleFilter: Function;
  setFilter: Function;
  setGuests: Function;
  setLocation: Function;
  resetFilter: Function;
}

const LocalStateContext = createContext({} as ContextProps);
const LocalStateProvider = LocalStateContext.Provider;

const FilterStateProvider = ({ children }: { children: ReactNode }) => {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access ir via the consumer!
  const [filter, setFilter] = useState<IFilter>(initialFilter);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const closeFilter = () => {
    setFilterOpen(false);
  };

  const openFilter = () => {
    setFilterOpen(true);
  };

  const setLocation = (location: string) => {
    setFilter((filter) => ({
      ...filter,
      location,
    }));
  };

  const resetFilter = () => setFilter(initialFilter);

  const setGuests = (guests: number) => {
    setFilter((filter) => ({
      ...filter,
      guests,
    }));
  };

  return (
    <LocalStateProvider
      value={{
        filterOpen,
        filter,
        openFilter,
        closeFilter,
        toggleFilter,
        setFilter,
        setGuests,
        setLocation,
        resetFilter,
      }}
    >
      {children}
    </LocalStateProvider>
  );
};

// make a custom hook for accessing the filter local state
const useFilter = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { FilterStateProvider, useFilter };
