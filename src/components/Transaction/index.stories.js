import Transaction from './index';

export default {
   title: 'Example/Transaction',
   component: Transaction,
   tags: ['autodocs'],
   // parameters: {
   //    layout: 'fullscreen',
   // },
};

export const Income = {
   args: {
      transaction: {
         comment: 'some income',
         value: 23,
         date: '13.02.2023'
      },
   },
};