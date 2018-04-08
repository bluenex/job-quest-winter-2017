import { connect } from 'react-redux';
import { setVisibleConfirmDeletion, deleteTodo } from '../actions';
import BaseConfirm from '../components/BaseConfirm';

const mapStateToProps = state => ({
  showConfirm: state.visibleConfirmDeletion.visibleConfirm,
  textToDelete: state.visibleConfirmDeletion.textToDelete,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    // dispatch dummy index -1 to just close the popup
    dispatch(setVisibleConfirmDeletion(-1, ''));
  },
  onConfirmDelete: () => {
    dispatch(deleteTodo(ownProps.idToDelete));
    // hide popup
    dispatch(setVisibleConfirmDeletion(-1, ''));
  },
});

const ConfirmDeletion = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseConfirm);

export default ConfirmDeletion;
