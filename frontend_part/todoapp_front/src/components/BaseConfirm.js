import React from 'react';
import { Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const BaseConfirm = ({
  onCancel, showConfirm, onConfirmDelete, textToDelete,
}) => (
  <Confirm
    className="conf"
    open={showConfirm}
    onCancel={onCancel}
    onConfirm={onConfirmDelete}
    content={`Are you sure to remove "${textToDelete}"?`}
    confirmButton="Yes, please"
    cancelButton="No"
  />
);

BaseConfirm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  showConfirm: PropTypes.bool.isRequired,
  onConfirmDelete: PropTypes.func.isRequired,
  textToDelete: PropTypes.string.isRequired,
};

export default BaseConfirm;
