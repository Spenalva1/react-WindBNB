import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    --white: #FFFFFF;
    --black: #333333;
    --grey: #828282;
    --lightGrey: #BDBDBD;
    --rating: #4F4F4F;
    --orange: #EB5757;
    --maxWidth: 1304px;
    --bs: 0 0 11px 2px rgb(0 0 0 / 9%);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--black);
    /* font-family: 'Mulish', sans-serif; */
    background-color: #FFFFFF;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(--black, black);
  }
  a:hover {
    text-decoration: underline;
  }
  p {
    margin: 0;
  }
  button {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const ContainerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export default GlobalStyles;
