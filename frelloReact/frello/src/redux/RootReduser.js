import { combineReducers } from 'redux';
import ErrorReducer from './Redusers/ErrorReducer';
import ProjectReducer from './Redusers/ProjectReducer';

const rootReducer = combineReducers({
  error: ErrorReducer,
  project: ProjectReducer,
})

export default rootReducer