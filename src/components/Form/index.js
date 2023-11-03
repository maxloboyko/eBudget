import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Wrapper } from './style';
import { Row } from './style';
import { Input } from './style';
import { Button } from './style';
import { Comment } from './style';

const Form = (props) => {
   const [form, setForm] = useState({
      value: '',
      date: new Date().toISOString().substring(0, 10),
      comment: ''
   })


   const onSubmit = (e) => {
      e.preventDefault();
      // debugger
      props.onChange(form)
      setForm({
         ...form,
         value: '',
         comment: ''
      })
   }

   const onChange = (e) => {
      const { value, name } = e.target;
      // debugger
      setForm({
         ...form,
         [name]: value
      })
   }


   return (
      <Wrapper>
         <form onSubmit={onSubmit}>
            <Row>
               <Input name='value'
                  type='number'
                  placeholder='Сума'
                  value={form.value}
                  onChange={onChange} />

               <Input name="date"
                  type="date"
                  value={form.date}
                  onChange={onChange} />
            </Row>

            <Row>
               <Button>Зберегти</Button>
               <Comment name="comment"
                  value={form.comment}
                  onChange={onChange} />
            </Row>

         </form>
      </Wrapper>
   )


}

Form.propTypes = {
   onChange: PropTypes.func
};

export default Form;