import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    // console.log(this.props.task._id);

    return (
      <Checkbox onChange={this.props.handleTodoItemClick} checked={this.props.task.isActive} label={this.props.task.name} />
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleTodoItemClick: PropTypes.func.isRequired,
};

export default TodoItem;
