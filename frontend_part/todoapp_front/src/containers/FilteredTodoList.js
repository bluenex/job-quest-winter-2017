import { connect } from 'react-redux';
import { toggleTodo, setVisibleConfirmDeletion } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (allTodos, visibleFilter) => {
  switch (visibleFilter) {
    case 'SHOW_ALL':
      return allTodos;
    case 'SHOW_COMPLETED':
      return allTodos.filter(t => t.done);
    case 'SHOW_ACTIVE':
      return allTodos.filter(t => !t.done);
    default:
      throw new Error(`Unknown filter: ${visibleFilter}`);
  }
};

const mapStateToProps = state => (
  {
    allTodos: getVisibleTodos(state.todos, state.visibleFilter),
    idToDelete: state.visibleConfirmDeletion.idToDelete,
  }
);

const mapDispatchToProps = {
  onTodoClick: toggleTodo,
  onClickDeleteTodo: setVisibleConfirmDeletion,
};

const FilteredTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default FilteredTodoList;
