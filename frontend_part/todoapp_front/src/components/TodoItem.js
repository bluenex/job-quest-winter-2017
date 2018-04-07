import React from 'react';
import { Icon, TableRow, TableCell } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DeleteButton from '../containers/DeleteButton';

const TodoItem = ({
  onClickToggle, id, done, text,
}) => (
  <TableRow>
    <TableCell onClick={onClickToggle}>
      <Icon name={done ? 'square outline' : 'checkmark box'} />
      {text}
    </TableCell>
    <TableCell>
      <DeleteButton todoId={id} />
    </TableCell>
  </TableRow>
);

TodoItem.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TodoItem;
