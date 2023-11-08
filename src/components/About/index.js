import { Wrapper } from './styles';
import { useContext } from 'react';
import CurrencyContext from '../../providers/context';

const About = () => {
   const currency = useContext(CurrencyContext);

   debugger;

   return (
      <Wrapper>
         <h1>About page</h1>
      </Wrapper>
   );
}


export default About;