import { createGlobalStyle } from './styled-components';
import theme from './theme';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${ theme.bg };
    margin: 0;
  }
  * {
  color: ${ theme.primaryColor };
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled( FlexRow )`
  justify-content: center;
  z-index: 2;
  height: 40px;
  padding: 4px;
  img {
    height: 100%;
  }
`;
