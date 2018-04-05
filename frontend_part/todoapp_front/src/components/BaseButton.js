import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const BaseButton = ({ active, children, onClick }) => (
  <Button onClick={onClick} toggle active={!active}>
    {children}
  </Button>
);

BaseButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BaseButton;
