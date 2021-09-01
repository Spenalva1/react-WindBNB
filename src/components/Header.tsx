import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import FilterPreview from './FilterPreview';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="header__logo">
        <img src={Logo} alt="windbnb" />
      </div>
      <FilterPreview />
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 35rem) {
    flex-direction: column;
    gap: 3.5rem;

    .header__logo {
      width: 100%;
    }
  }
`;
