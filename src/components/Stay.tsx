import React from 'react';
import styled from 'styled-components';
import { Stay } from '../lib/staysState';

interface StayProps {
  stay: Stay;
}

export default function StayComponent({ stay }: StayProps) {
  return (
    <StayStyles>
      <div className="stay__image__ctn">
        <img className="stay__image" src={stay.photo} alt={stay.title} />
      </div>
      <div className="stay__info">
        {stay?.superHost && <span className="superhost">SUPER HOST</span>}
        <p className="stay__info__type">{stay.type}</p>
        <div className="stay__info__rating">
          <span className="material-icons md-18">star</span>
          <span>{stay.rating}</span>
        </div>
      </div>
      <p className="stay__title">{stay.title}</p>
    </StayStyles>
  );
}

const StayStyles = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;

  .stay__image__ctn {
    overflow: hidden;
    width: 100%;
    max-height: 27.5rem;
    border-radius: 2.4rem;

    img {
      width: 100%;
      height: 100%;
      min-height: 27.5rem;
      object-fit: cover;
      border-radius: 2.4rem;
    }

    @media screen and (max-width: 35rem) {
      max-height: 22.5rem;

      img {
        min-height: 22.5rem;
      }
    }
  }

  .stay__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;

    .superhost {
      font-size: 1.2rem;
      font-weight: 700;
      padding: 0rem 0.6rem;
      color: #4f4f4f;
      border: 1px solid #4f4f4f;
      border-radius: 1.2rem;
    }

    &__type {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--grey);
    }

    &__rating {
      margin-left: auto;
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      color: #4f4f4f;

      .material-icons {
        color: var(--orange);
        margin-right: 0.7rem;
      }
    }
  }

  .stay__title {
    margin-top: 0.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
