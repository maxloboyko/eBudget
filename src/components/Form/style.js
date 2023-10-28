import styled from 'styled-components';

// Wrapper
export const Wrapper = styled.div`
   background-color: #4f4f4f;
   border: 1px solid #383838;
   border-radius: 7px;
   padding: 5px;
   margin-bottom: 5px;
`;
Wrapper.displayName = 'TransactionWrapper';

// Row
export const Row = styled.div`
   display: flex;
   align-items: center;
`;
Row.displayName = 'Row';

// Input
export const Input = styled.input`
   border-radius: 7px;
   padding: 0 5px;
   min-width: 80px;
   margin-bottom: 3px;
   margin-right: 10px;
   border: 1px solid #dbdbdb;
   height: 40px;
   width: 130px;
   outline: none;
`;
Input.displayName = 'Input';

// Button
export const Button = styled.button`
   border: 1px solid #dbdbdb;
   height: 40px;
   border-radius: 7px;
   padding: 0 21px;
   box-sizing: border-box;
   background-color: #217504;
   color: #fff;
   font-size: 18px;
   font-weight: 700;
   margin-right: 11px;
   outline: none;
   width: 141px;
   transition: all 0.3s;

   &:hover {
      cursor: pointer;
      background-color: #e0e0e0;
      color: rgba(0, 0, 0, 0.87);
      border: 1px solid #739b65;
   }
`;
Button.displayName = 'Button';

// Comment
export const Comment = styled.textarea`
   min-height: 40px;
   line-height: 1.5;
   box-sizing: border-box;
   padding: 5px;
   border-radius: 7px;
   width: 120px;
   margin: 0px;
   height: 40px;
   min-width: 141px;
   border: 1px solid #dbdbdb;
   outline: none;
`;
Comment.displayName = 'Comment';