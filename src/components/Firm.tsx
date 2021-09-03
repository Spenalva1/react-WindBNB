import React from 'react';
import styled from 'styled-components';

export default function Firm() {
  return (
    <FirmStyles>
      <p>
        created by{' '}
        <a
          href="https://www.linkedin.com/in/santiago-penalva-0b4902175/"
          target="_blank"
          rel="noreferrer"
        >
          spenalva
        </a>{' '}
        - devChallenges.io
      </p>
    </FirmStyles>
  );
}

const FirmStyles = styled.footer`
  p {
    color: var(--grey);
    margin-top: 2rem;
    text-align: center;

    a {
      color: var(--grey);
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;
