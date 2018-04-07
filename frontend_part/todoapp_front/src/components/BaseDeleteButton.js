import React from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const BaseDeleteButton = ({ onClickDeleteTodo, showConfirm, onConfirmDelete }) => (
  <div>
    <Button
      color="google plus"
      floated="right"
      icon="remove"
      onClick={onClickDeleteTodo}
      size="mini"
    />
    <Confirm
      className="conf"
      open={showConfirm}
      onCancel={onClickDeleteTodo}
      onConfirm={onConfirmDelete}
      content="Are you sure to remove this task?"
      confirmButton="Yes, please"
      cancelButton="No"
    />
  </div>
);

BaseDeleteButton.propTypes = {
  onClickDeleteTodo: PropTypes.func.isRequired,
  showConfirm: PropTypes.bool.isRequired,
  onConfirmDelete: PropTypes.func.isRequired,
};

export default BaseDeleteButton;
