let nextId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextId += 1,
  text,
});

export const toggleTodo = todoId => ({
  type: 'TOGGLE_TODO',
  todoId,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});
