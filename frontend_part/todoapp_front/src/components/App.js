import React from 'react';
import NewTodo from '../containers/NewTodo';
import TodoList from '../containers/TodoList';
import FilterButtons from './FilterButtons';

const App = () => (
  <div>
    <NewTodo />
    <TodoList />
    <FilterButtons />
  </div>
);

export default App;
