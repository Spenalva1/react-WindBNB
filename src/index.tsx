import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import FilterModal from './components/FilterModal';
import Header from './components/Header';
import { FilterStateProvider } from './lib/filterState';
import { StaysStateProvider } from './lib/staysState';
import GlobalStyles, { ContainerStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <FilterStateProvider>
      <StaysStateProvider>
        <FilterModal></FilterModal>
        <ContainerStyles>
          <Header />
          <Dashboard />
        </ContainerStyles>
      </StaysStateProvider>
    </FilterStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
