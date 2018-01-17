import { connect } from 'react-redux';

import FilterButton from '../components/filterButtonComponent';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filterName === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onclick: () => {
    dispatch(setVisibilityFilter(ownProps.filterName));
  },
});

const FilterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton);

export default FilterButtonContainer;
