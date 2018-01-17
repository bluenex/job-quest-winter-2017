import React from 'react';
import { Icon, TableRow, TableCell } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ConfirmDeletion from './confirmDeletionComponent';

const TodoItem = ({ onclick, ondelete, isActive, text }) => (
  <TableRow>
    <TableCell onClick={onclick}>
      <Icon name={isActive ? 'square outline' : 'checkmark box'} />
      {text}
    </TableCell>
    <TableCell>
      <ConfirmDeletion handleDeletionClick={ondelete} />
    </TableCell>
  </TableRow>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  ondelete: PropTypes.func.isRequired,
};

export default TodoItem;
