import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import NewTodo from '../containers/NewTodo';
import FilteredTodoList from '../containers/FilteredTodoList';
import FilterButtonsGroup from './FilterButtonsGroup';
import ConfirmDeletion from '../containers/ConfirmDeletion';

const App = () => (
  <div className="todoList">
    <style>
      {`
        body > div,
        body > div > div,
        body > div > div > div.todoList {
          height: 100%;
        }

        body > div > div.conf {
          height: auto;
          width: 150px;
        }
      `}
    </style>

    {/* start grid */}
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      {/* start grid column */}
      <Grid.Column style={{ maxWidth: 400 }}>
        {/* header */}
        <Header as="h1" color="blue" textAlign="center">
          TODO List
        </Header>

        {/* text area to add new todo */}
        <NewTodo />

        {/* confirmation popup */}
        <ConfirmDeletion />

        {/* todo list */}
        <FilteredTodoList />

        {/* filter options */}
        <FilterButtonsGroup />
      </Grid.Column>
    </Grid>
  </div>
);

export default App;
