const visibleConfirmDeletion = (state = false, action) => {
  switch (action.type) {
    case 'SET_VISIBLE_CONFIRM':
      return !action.openConfirm;
    default:
      return state;
  }
};

export default visibleConfirmDeletion;
