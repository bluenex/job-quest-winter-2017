import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import TodoItem from './TodoItem';


const TodoList = ({ allTodos, onTodoClick, onClickDeleteTodo }) => (
  <Table singleLine>
    <Table.Body>
      {allTodos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          onClickToggle={() => onTodoClick(todo.id)}
          onClickDeleteTodo={() => onClickDeleteTodo(todo.id, todo.text)}
        />
      ))}
    </Table.Body>
  </Table>
);

TodoList.propTypes = {
  allTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onClickDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
