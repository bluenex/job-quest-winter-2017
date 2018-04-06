import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

// create dispatcher function
// eslint-disable-next-line react/prop-types
let NewTodo = ({ dispatch }) => { // eslint-disable-line import/no-mutable-exports
  let input;

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      if (!input.value.trim()) {
        return;
      }
      dispatch(addTodo(input.value));
      input.value = '';
    }}
    >
      <Form.Group>
        <input
          placeholder="What to do?"
          ref={(node) => {
            input = node;
          }}
        />
        <Form.Button content="+" />
      </Form.Group>
    </Form>
  );
};

NewTodo = connect()(NewTodo);

export default NewTodo;
