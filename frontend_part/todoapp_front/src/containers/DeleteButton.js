import { connect } from 'react-redux';
import { setVisibleConfirmDeletion, deleteTodo } from '../actions';
import BaseDeleteButton from '../components/BaseDeleteButton';

const mapStateToProps = (state, ownProps) => {
  console.log('here it is!', state.todos[ownProps.todoId].text);

  return ({
    showConfirm: state.visibleConfirmDeletion,
    todoId: ownProps.todoId,
    text: state.todos[ownProps.todoId].text,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    onClickDeleteTodo: () => {
      dispatch(setVisibleConfirmDeletion());
    },
    onConfirmDelete: () => {
      dispatch(deleteTodo(ownProps.todoId));
      // hide popup
      dispatch(setVisibleConfirmDeletion());
    },
  });
};

const DeleteButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseDeleteButton);

export default DeleteButton;
