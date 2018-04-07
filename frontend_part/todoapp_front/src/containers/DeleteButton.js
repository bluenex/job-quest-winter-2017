import { connect } from 'react-redux';
import { setVisibleConfirmDeletion, deleteTodo } from '../actions';
import BaseDeleteButton from '../components/BaseDeleteButton';

const mapStateToProps = (state) => {
  // console.log(state);

  return ({
    showConfirm: state.visibleConfirmDeletion,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);

  return ({
    onClickDeleteTodo: () => {
      dispatch(setVisibleConfirmDeletion(ownProps.showConfirm));
    },
    onConfirmDelete: deleteTodo,
  });
};

const DeleteButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseDeleteButton);

export default DeleteButton;
