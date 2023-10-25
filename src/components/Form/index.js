import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper } from './style';
import { Row } from './style';
import { Input } from './style';
import { Button } from './style';
import { Comment } from './style';

class Form extends Component {
   constructor() {
      super();

      this.state = {
         //значення за замовчуванням
         value: '',
         date: new Date().toISOString().substring(0, 10),
         comment: ''
      }
   }

   onSubmit = (e) => {
      e.preventDefault();
      // debugger
      this.props.onChange(this.state)
      this.setState({
         value: '',
         // date: new Date().toISOString().substring(0, 10),
         comment: ''
      })
   }

   onChange = (e) => {
      const { value, name } = e.target;
      // debugger
      this.setState({
         [name]: value
      })
   }

   render() {
      return (
         <Wrapper>
            <form onSubmit={this.onSubmit}>
               <Row>
                  <Input name='value'
                     type='number'
                     placeholder='Сума'
                     value={this.state.value}
                     onChange={this.onChange} />

                  <Input name="date"
                     type="date"
                     value={this.state.date}
                     onChange={this.onChange} />
               </Row>


               <Row>
                  <Button>Зберегти</Button>
                  <Comment name="comment"
                     value={this.state.comment}
                     onChange={this.onChange} />
               </Row>


            </form>
         </Wrapper>

      )

   }
}

Form.propTypes = {
   onChange: PropTypes.func
};

export default Form;