import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import TodoItem from './TodoItem';
import ConfirmDeletion from '../containers/ConfirmDeletion';


const TodoList = ({
  allTodos, onTodoClick, onClickDeleteTodo, idToDelete,
}) => (
  <Table singleLine>
    <Table.Body>
      {/* all todo items here */}
      {allTodos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          onClickToggle={() => onTodoClick(todo.id)}
          onClickDeleteTodo={() => onClickDeleteTodo(todo.id, todo.text)}
        />
      ))}

      {/* with a single confirmation popup */}
      <ConfirmDeletion idToDelete={idToDelete} />
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
  idToDelete: PropTypes.number.isRequired,
};

export default TodoList;
