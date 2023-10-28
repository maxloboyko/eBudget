import styled from 'styled-components';

export const Wrapper = styled.div`
   background-color: ${({ value }) => value < 0 ? '#a13b3b' : '#185534'};
   border: ${({ value }) => value < 0 ? '1px solid #ff8e8e;' : '1px solid #919191;'};
   border-radius: 7px;
   padding: 5px;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
Wrapper.displayName = 'TransactionWrapper'

// TransactionDate
export const TransactionDate = styled.div`
   flex-grow: 1;
`;
TransactionDate.displayName = 'TransactionDate'

// Value
export const Value = styled.div`
   flex-grow: 1;
`;
Value.displayName = 'Value'

// Comment
export const Comment = styled.div`
   flex-grow: 3;
`;
Comment.displayName = 'Comment'