import React from 'react';
import axios from 'axios';

// const Fetcher = () => {
//   return <div>Holaa</div>;
// };

// export default Fetcher;

class Fetcher extends React.Component {
  constructor() {
    super();
    this.state = { tasks: []};
    this.renderTask = this.renderTask.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4444/api/tasks')
    .then((res) => {
      this.setState({
        tasks: res.data,
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  renderTask(task) {
    return <div>{task.name}</div>;
  }

  render() {
    console.log(this.state.tasks);
    return <div>{this.state.tasks.map(task => this.renderTask(task))}</div>;
  }
};

export default Fetcher;