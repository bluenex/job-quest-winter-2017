import { connect } from 'react-redux';
import { setVisibleConfirmDeletion, deleteTodo } from '../actions';
import BaseConfirm from '../components/BaseConfirm';

const mapStateToProps = state => ({
  showConfirm: state.visibleConfirmDeletion.visibleConfirm,
  textToDelete: state.visibleConfirmDeletion.textToDelete,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCancel: () => {
    dispatch(setVisibleConfirmDeletion(0, ''));
  },
  onConfirmDelete: () => {
    dispatch(deleteTodo(ownProps.todoId));
    // hide popup
    dispatch(setVisibleConfirmDeletion(0, ''));
  },
});

const ConfirmDeletion = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseConfirm);

export default ConfirmDeletion;
