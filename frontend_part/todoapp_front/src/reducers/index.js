import { combineReducers } from 'redux';
import todos from './todos';
import visibleFilter from './visibleFilter';
import visibleConfirmDeletion from './visibleConfirmDeletion';

export default combineReducers({
  todos,
  visibleFilter,
  visibleConfirmDeletion,
});
