import { combineReducers } from 'redux';
import todos from './todos';
import visibleFilter from './visibleFilter';

export default combineReducers({
  todos,
  visibleFilter,
});
