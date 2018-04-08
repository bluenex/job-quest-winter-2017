let nextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});

export const setVisibleConfirmDeletion = (idToDelete, textToDelete) => ({
  type: 'SET_VISIBLE_CONFIRM',
  idToDelete,
  textToDelete,
});

export const setVisibleFilter = filter => ({
  type: 'SET_VISIBLE_FILTER',
  filter,
});

export const VisibleFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
