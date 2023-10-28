import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
   background-color: #2d2d2d;
   padding: 15px 15px;
   margin: 15px auto;
   max-width: 800px;
   border-radius: 15px;
   
`;

export const GlobalStyle = createGlobalStyle`
   body {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      background-color: #222222;
   }
   h1 {
      color: #fff;
   }
`;