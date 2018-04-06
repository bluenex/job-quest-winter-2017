import React from 'react';
import { Button } from 'semantic-ui-react';
import FilterButton from '../containers/FilterButton';
import { VisibleFilters } from '../actions';

const FilterButtonsGroup = () => (
  <Button.Group>
    <FilterButton filter={VisibleFilters.SHOW_ALL}>
      All
    </FilterButton>
    <FilterButton filter={VisibleFilters.SHOW_ACTIVE}>
      Active
    </FilterButton>
    <FilterButton filter={VisibleFilters.SHOW_COMPLETED}>
      Done
    </FilterButton>
  </Button.Group>
);

export default FilterButtonsGroup;
