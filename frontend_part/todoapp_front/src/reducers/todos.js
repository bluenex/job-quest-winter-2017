const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          active: true,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map(todo => (
        (todo.id === action.id) ? { ...todo, active: !todo.active } : todo
      ));

    default:
      return state;
  }
};

export default todos;
