import React from 'react';
import { Icon, TableRow, TableCell } from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import ConfirmDeletion from './confirmDeletionComponent';

const TodoItem = ({ onClickToggle, done, text }) => {
  return (
    <TableRow>
      <TableCell onClick={onClickToggle}>
        <Icon name={done ? 'square outline' : 'checkmark box'} />
        {text}
      </TableCell>
    </TableRow>
  );
};

TodoItem.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
