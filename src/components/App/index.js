import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Routes
} from "react-router-dom";

import { open } from '../../utils/indexdb';
import Home from '../Home';
import About from '../About';
import Settings from '../Settings';
import Statistics from '../Statistics';
import Header from '../Header';

import { Wrapper, GlobalStyle } from './styles';

class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         loading: true
      }
   }

   componentDidMount() {

      open().then(() => {
         this.setState({
            loading: false
         })
      }).catch(() => {
         console.error('Ooops! Something went wrong!');
      });
   }


   render() {
      if (this.state.loading) {
         return <div>Loading...</div>
      };
      return (
         <Router>
            <Wrapper>
               <GlobalStyle />
               <Header />
            </Wrapper>

            <Routes>
               <Route path="/about" element={<About />} />
               <Route path="/statistics" element={<Statistics />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/" element={<Home />} />
            </Routes>
         </Router>
      )
   }

}
export default App;