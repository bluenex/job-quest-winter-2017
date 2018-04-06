let nextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id,
});

export const setVisibleFilter = filter => ({
  type: 'SET_VISIBLE_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibleFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};
