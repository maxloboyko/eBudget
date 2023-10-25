import { Wrapper, GlobalStyle } from './styles';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";


import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';


const App = () => {
   return (
      <Router>
         <Wrapper>
            <GlobalStyle />
            <nav>
               <ul>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/statistics">Statistics</Link>
                  </li>
                  <li>
                     <Link to="/about">About</Link>
                  </li>
               </ul>
            </nav>
         </Wrapper>

         <Switch>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/statistics">
               <Statistics />
            </Route>
            <Route path="/">
               <Home />
            </Route>

         </Switch>
      </Router>
   )

}
export default App;