const visibleConfirmDeletion = (state =
  {
    visibleConfirm: false,
    idToDelete: 0,
    textToDelete: '',
  }, action) => {
  switch (action.type) {
    case 'SET_VISIBLE_CONFIRM':
      return {
        visibleConfirm: !state.visibleConfirm,
        idToDelete: action.idToDelete,
        textToDelete: action.textToDelete,
      };
    default:
      return state;
  }
};

export default visibleConfirmDeletion;
