import React from 'react';
import axios from 'axios';
import { Button, Form, Grid, Header, Checkbox } from 'semantic-ui-react';

import NewTodo from './newTodoComponent';
import TodoItem from './todoItemComponent';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], newtodo: { name: '', isActive: true } };
    // this.taskList = '';
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {
    axios.get('/api/tasks')
      .then((res) => {
        this.setState({
          tasks: res.data,
        });
      }).catch((err) => {
        console.log(err);
      });

    // // set this to class member
    // const test = this.state.tasks.map(task => (
    //   <li key={task._id}><Checkbox checked={task.isActive} label={task.name} /></li>
    // ));
  }

  handleChange = (e, { name, value }) => {
    this.setState({ newtodo: { [name]: value, isActive: true } });
    // console.log(this.state.newtodo);
  }

  handleSubmit = () => {
    const newTodo = this.state.newtodo;
    // console.log("submit is called, this is raw: " + newTodo);
    // console.log("stringify: " + JSON.stringify(newTodo));

    axios.post('/api/tasks', JSON.stringify(newTodo), {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(
        this.fetchTasks(),
        this.setState({ newtodo: { name: '', isActive: true }})
      )
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // set this to class member
    const test = this.state.tasks.map(task => (
      // <li key={task._id}><Checkbox checked={task.isActive} label={task.name} /></li>
      <TodoItem task={task} />
    ));

    return (
      <div className="todoList">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.todoList {
        height: 100%;
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
            <NewTodo todoValue={this.state.newtodo.name} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            <ul>
              {test}
            </ul>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default TodoList;
