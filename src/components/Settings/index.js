import { Wrapper } from './styles';
import { useContext, useCallback, memo } from 'react';

import { AppContext } from '../../providers/context';

const Test = ({ onClick }) => {
   console.log('rendering');

   return <button onClick={onClick}>Click me!</button>
}

const Settings = () => {
   const { state, dispatch } = useContext(AppContext);
   const onChange = (e) => {
      const { value } = e.target;
      dispatch({
         type: 'changeCurrency',
         currency: value
      })
   }

   const onClick = () => {
      console.log('Parent click');
   }

   return (

      <Wrapper>
         <h1>Налаштування</h1>

         <Test onClick={onClick} />

         <div>
            <form>
               <label>
                  <b>Валюта:</b>
                  <select name="currency"
                     onChange={onChange}
                     value={state.currency}>
                     <option vlaue="UAH">Гривня</option>
                     <option vlaue="USD">Долар США</option>
                     <option vlaue="EUR">Євро</option>
                  </select>
               </label>
            </form>
         </div>
      </Wrapper>




   )
};

export default Settings;