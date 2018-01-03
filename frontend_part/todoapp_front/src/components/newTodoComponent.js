import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class NewTodo extends React.Component {
  render() {
    const todoVal = this.props.todoValue;

    return (
      <Form onSubmit={this.props.onSubmit}>
        <Form.Group>
          <Form.Input width="16" name="name" value={todoVal} onChange={this.props.onChange} placeholder="What to do?" />
          <Form.Button content="+" />
        </Form.Group>
      </Form>
    );
  }
}

NewTodo.propTypes = {
  todoValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodo;
