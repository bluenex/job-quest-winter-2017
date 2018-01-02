import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  render() {
    return (
      <li key={this.props.task._id}><Checkbox checked={this.props.task.isActive} label={this.props.task.name} /></li>
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
