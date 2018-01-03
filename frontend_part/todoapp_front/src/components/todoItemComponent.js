import React from 'react';
import { Icon, Button, TableRow, TableCell } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ConfirmDeletion from './confirmDeletionComponent';

class TodoItem extends React.Component {
  render() {
    // console.log(this.props.task._id);

    return (
      // <List.Item onClick={this.props.handleTodoItemClick}>
      //   <Icon name={this.props.task.isActive ? 'checkmark' : 'remove'} />
      //   <List.Content>
      //     {/* <List.Header>no</List.Header> */}
      //     <List.Description>
      //       {/* <Checkbox  checked={this.props.task.isActive} label={this.props.task.name} /> */}
      //       {this.props.task.name}
      //     </List.Description>
      //   </List.Content>
      // </List.Item>

      <TableRow>
        <TableCell onClick={this.props.handleTodoItemClick}>
          <Icon name={this.props.task.isActive ? 'square outline' : 'checkmark box'} />
          {this.props.task.name}
        </TableCell>
        <TableCell>
          <ConfirmDeletion handleDeletionClick={this.props.handleDeleteButtonClick} />
          {/* <Button onClick={this.props.handleDeleteButtonClick} color='google plus' floated='right' icon='remove' /> */}
        </TableCell>
      </TableRow>

    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleTodoItemClick: PropTypes.func.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
};

export default TodoItem;
