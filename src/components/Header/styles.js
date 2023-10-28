import styled, { createGlobalStyle } from 'styled-components';

export const Nav = styled.nav`
   ul {
      display: flex;
      list-style: none;

      li {
         text-decoration: none !important;
         margin-right: 10px;
         padding: 7px;
         color: #fff !important;
         font-weight: 700;
         border-radius: 50px;
         border: 4px solid #fff;
         color: #fff;
         background-color: #2a2a2a;
      }
   }

`;

Nav.displayName = 'Nav'

export const GlobalStyle = createGlobalStyle`

ul {
   padding: 0;
   margin: 0;
}
   a {
      text-decoration: none;
      color: #fff;
   }
   
`;
