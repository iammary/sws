import { createGlobalStyle } from './styled-components';
import theme from './theme';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background-color: ${ theme.bodyBg };
    margin: 0;
  }
  * {
    color: ${ theme.primaryColor };
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled( FlexRow )`
  background-color: ${ theme.bg };
  justify-content: center;
  z-index: 2;
  height: 40px;
  padding: 4px;
  img {
    height: 100%;
  }
`;

export const MainContainer = styled.div`
  background: url('/static/high_growth.jpg') no-repeat 50%;
  background-size: cover;
`;

export const BackBlur = styled.div`
  position: relative;
  overflow: hidden;
  height: 150px;
  background: #000;
  filter: blur(0);
  div {
    position: absolute;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: 110%;
    margin: -10px -5% 0;
    opacity: .7;
    height: 180px;
  }
`;

export const ImgRes = styled.img`
  max-width: 100%;
  height: auto;
`;

export const GridHeader = styled.div`
  margin-top: -60px;
  margin-bottom: 50px;
  img {
    width: 120px;
  }
  > div {
    width: calc(100% - 120px);
    display: inline-block;
    vertical-align: top;
    padding-left: 20px;
  }
  h1 {
    margin: 15px 0 10px;
  }
  h3 {
    font-size: 14px;
  }
`;

export const StockBox = styled.div`
  background: ${ theme.boxBg };
  border-radius: 10px;
  box-shadow: 0 0 3px ${ theme.boxHeaderBg };
  overflow: hidden;
  margin-bottom: 15px;
  h2 {
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    background: ${ theme.boxHeaderBg };
    margin: 0;
    padding: 10px;
    font-size: 16px;
  }
  > div {
    padding: 0 20px;
  }
`;

export const PeekDescription = styled.div`
  position: relative;
  padding: 0;
  height: 170px;
  .overlay {
    position: absolute;
    bottom: 0;
    height: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    transition: .5s ease;
    img.cover {
      width: 100%;
    }
  }
  &:hover .overlay {
    bottom: calc(100% - 50px);
    height: 50px;
  }
  p {
    padding-top: 65px;
    font-size: 13px;
    line-height: 14px;
  }
  .stockInfo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
  }
  .stockLogo {
    height: 25px;
    background: white;
    border-radius: 3px;
  }
  .stockSymbol {
    float: right;
    background: rgba(0,0,0, .8);
    padding: 6px;
    font-size: 12px;
  }
`;
