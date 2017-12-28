import React from 'react';
import axios from 'axios';
import Todo from './newTodoComponent';
import { Checkbox } from 'semantic-ui-react';

// const Fetcher = () => {
//   return <div>Holaa</div>;
// };

// export default Fetcher;

class Fetcher extends React.Component {
  constructor() {
    super();
    this.state = { tasks: [], newtodo: { name: '', isActive: true } };
    // this.renderTask = this.renderTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      headers: {'Content-Type': 'application/json'}
    })
      .then(this.fetchTasks())
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.tasks);

    // const test = this.state.tasks.map((task) => this.renderTask(task));

    const test = this.state.tasks.map(task => (
      <li key={task._id}><Checkbox checked={task.isActive} label={task.name} /></li>
    ));

    return (
      <div>
        <ul>
          {test}
        </ul>

        <Todo onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Fetcher;
