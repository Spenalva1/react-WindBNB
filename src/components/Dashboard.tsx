import React from 'react';
import styled from 'styled-components';
import { useStays } from '../lib/staysState';
import StayComponent from './Stay';

export default function Dashboard() {
  const filteredStays = useStays();

  return (
    <DashboardStyles>
      <div className="dashboard__header">
        <h1>Stays in Finland</h1>
        <span>12+ stays</span>
      </div>
      <section className="dashboard__list">
        {filteredStays &&
          !!filteredStays.length &&
          filteredStays.map((stay) => (
            <StayComponent key={stay.title} stay={stay}></StayComponent>
          ))}
      </section>
    </DashboardStyles>
  );
}

const DashboardStyles = styled.main`
  margin-top: 3rem;

  .dashboard__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font: 24px;
      font-weight: 700;

      @media screen and (max-width: 35rem) {
        font-size: 1.8rem;
      }
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

  .dashboard__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 40rem);
    gap: 3.2rem;
    row-gap: 4rem;
    justify-content: space-around;

    @media screen and (max-width: 35rem) {
      grid-template-columns: 32.5rem;
      justify-content: center;
    }
  }
`;
