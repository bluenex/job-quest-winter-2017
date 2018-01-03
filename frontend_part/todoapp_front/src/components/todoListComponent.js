import React from 'react';
import axios from 'axios';
import { List, Grid, Header, Button, Table } from 'semantic-ui-react';

import NewTodo from './newTodoComponent';
import TodoItem from './todoItemComponent';
import Tab from 'semantic-ui-react/dist/commonjs/modules/Tab/Tab';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newtodo: { name: '', isActive: true },
      filter: 'active',
    };
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

  handleTodoItemClick = (id) => {
    // log id of being clicked element
    // console.log('handle click is called from:', id);
    // filter element by id
    const updatedTasks = [...this.state.tasks].find(function (el) {
      return el._id === id
    });

    // change status when clicked
    updatedTasks.isActive = !updatedTasks.isActive;

    // send update req
    this.updateExistingTask(id, updatedTasks);
  }

  handleChange = (e, { name, value }) => {
    this.setState({ newtodo: { [name]: value, isActive: true } });
    // console.log(this.state.newtodo);
  }

  handleSubmit = () => {
    const newTodo = this.state.newtodo;
    // console.log("submit is called, this is raw: " + newTodo);
    // console.log("stringify: " + JSON.stringify(newTodo));

    this.createNewTask(newTodo);
  }

  handleFilterClick = (e) => {
    // get button key
    console.log(e.target.attributes.getNamedItem('data-key').value);
    const newFilterVal = e.target.attributes.getNamedItem('data-key').value;

    this.setState({ filter: newFilterVal });
  }

  createNewTask(ntd) {
    axios.post('/api/tasks', JSON.stringify(ntd), {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(
      // fetch data from database again
      this.fetchTasks(),
      // reset input form
      this.setState({ newtodo: { name: '', isActive: true } })
      )
      .catch((err) => {
        console.log(err);
      });
  }

  updateExistingTask(id, udt) {
    axios.put('/api/tasks/' + id, JSON.stringify(udt), {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(
      this.fetchTasks()
      )
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    // set this to class member
    // const test = this.state.tasks.map(task => (
    //   // <li key={task._id}><Checkbox checked={task.isActive} label={task.name} /></li>
    //   <TodoItem task={task} />
    // ));

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

            {/* todo list */}

            <Table singleLine>
              <Table.Body>
                {/* normal function wont be able to see this.state, go arrow! */}
              {this.state.tasks.filter((el) => {
                // console.log(this.state);
                if(this.state.filter === 'active') {
                  return el.isActive === true;
                } else if(this.state.filter === 'done') {
                  return el.isActive === false;
                } else {
                  return el;
                }
              }).map(task => (
                <TodoItem key={task._id} task={{ isActive: task.isActive, name: task.name }} handleTodoItemClick={() => this.handleTodoItemClick(task._id)} />
              ))}
              {/* {this.state.tasks.map(task => (
                <TodoItem key={task._id} task={{ isActive: task.isActive, name: task.name }} handleTodoItemClick={() => this.handleTodoItemClick(task._id)} />
              ))} */}
              </Table.Body>
            </Table>

            {/* filter options */}
            <Button.Group onClick={this.handleFilterClick}>
              <Button data-key='all'>All</Button>
              <Button data-key='active'>Active</Button>
              <Button data-key='done'>Done</Button>
            </Button.Group>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default TodoList;
