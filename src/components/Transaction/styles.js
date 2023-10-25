import styled from 'styled-components';

export const Wrapper = styled.div`
   background-color: ${({ value }) => value < 0 ? '#ffe6e6' : '#d9f3e5'};
   border: ${({ value }) => value < 0 ? '1px solid #ff8e8e;' : '1px solid #919191;'};
   border-radius: 3px;
   padding: 5px;
   margin-bottom: 5px
`;

Wrapper.displayName = 'TransactionWrapper'

