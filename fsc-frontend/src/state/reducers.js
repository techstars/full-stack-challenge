import { combineReducers } from 'redux';
import preferencesReducer from './preferences/reducer';
import companiesReducer from './companies/reducer';

export default combineReducers({
  preferences: preferencesReducer,
  companies: companiesReducer
});
