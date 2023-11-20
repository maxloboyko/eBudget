import { Wrapper } from './styles';
import { useContext, useMemo, useCallback, memo } from 'react';

import { AppContext } from '../../providers/context';

const Test = memo(({ data }) => {
   console.log('rendering');

   return <div>{JSON.stringify(data)}</div>
})

const Settings = () => {
   const { state, dispatch } = useContext(AppContext);
   const onChange = (e) => {
      const { value } = e.target;
      dispatch({
         type: 'changeCurrency',
         currency: value
      })
   }

   const data = useMemo(() => [2], []);

   return (

      <Wrapper>
         <h1>Налаштування</h1>

         <Test data={data} />

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