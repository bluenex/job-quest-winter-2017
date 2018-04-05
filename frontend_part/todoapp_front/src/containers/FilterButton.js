import { connect } from 'react-redux';
import { setVisibleFilter } from '../actions';
import BaseButton from '../components/BaseButton';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibleFilter(ownProps.filter));
  },
});

const FilterButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseButton);

export default FilterButton;
