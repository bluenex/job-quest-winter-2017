import { connect } from 'react-redux';
import { setVisibleFilter } from '../actions';
import BaseButton from '../components/BaseButton';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibleFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleFilter: () => {
    dispatch(setVisibleFilter(ownProps.filter));
  },
});

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseButton);

export default FilterButton;
