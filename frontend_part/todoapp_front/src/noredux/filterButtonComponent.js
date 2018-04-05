import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const FilterButton = ({ active, child, onclick }) => (
  <Button onClick={onclick} toggle active={active}>{child}</Button>
);

FilterButton.propTypes = {
  onclick: PropTypes.func.isRequired,
  child: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
};

export default FilterButton;
