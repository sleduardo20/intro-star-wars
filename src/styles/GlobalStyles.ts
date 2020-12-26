import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Saira Extra Condensed', sans-serif;
    font-weight: 400;
    line-height: 1.25;
    color: var(--primary);

  }

  body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #000000;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  
  #root{
    width: 100%;
  }

  :root{
    --primary: #FFE81F;
    --secondary: #033265;
    
  }
`;

export default globalStyles;
