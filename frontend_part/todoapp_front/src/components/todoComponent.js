import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'react-proptypes';

const Todo = ({ onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Form.Group widths="equal">
      <Form.Input name="name" onChange={onChange} placeholder="What to do?" />
      <Form.Button content="+" />
    </Form.Group>
  </Form>
);

Todo.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Todo;
