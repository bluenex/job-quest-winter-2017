import React from 'react';
import { Button, Icon, TableRow, TableCell } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TodoItem = ({
  onClickToggle, onClickDeleteTodo, done, text,
}) => (
  <TableRow>
    {/* todo content */}
    <TableCell onClick={onClickToggle}>
      <Icon name={done ? 'square outline' : 'checkmark box'} />
      {text}
    </TableCell>
    {/* remove button */}
    <TableCell>
      <Button
        color="google plus"
        floated="right"
        icon="remove"
        onClick={onClickDeleteTodo}
        size="mini"
      />
    </TableCell>
  </TableRow>
);

TodoItem.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  onClickDeleteTodo: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
