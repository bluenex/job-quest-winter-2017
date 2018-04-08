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
      // remove deleted index here!
      state.splice(state.findIndex(x => x.id === action.id), 1);
      return state;

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
