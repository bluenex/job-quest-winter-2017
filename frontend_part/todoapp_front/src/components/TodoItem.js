import React from 'react';
import { Icon, TableRow, TableCell } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import ConfirmDeletion from './confirmDeletionComponent';

const TodoItem = ({ onClickToggle, done, text }) => (
  <TableRow>
    <TableCell onClick={onClickToggle}>
      <Icon name={done ? 'square outline' : 'checkmark box'} />
      {text}
    </TableCell>
    <TableCell>
      {/* <ConfirmDeletion handleDeletionClick={this.props.handleDeleteButtonClick} /> */}
      {/* <Button onClick={this.props.handleDeleteButtonClick} color='google plus' floated='right' icon='remove' /> */}
    </TableCell>
  </TableRow>
);

TodoItem.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
