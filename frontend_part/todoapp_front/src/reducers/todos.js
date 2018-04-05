const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case 'DELETE_TODO':
      return [
        ...state.item.slice(0, action.id),
        ...state.item.slice(action.id + 1),
      ];

    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });

    default:
      return state;
  }
};

export default todos;
