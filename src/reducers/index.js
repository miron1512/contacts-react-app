import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form'
import ContactsReducer from './contacts';

export default combineReducers({
  ContactsReducer,
  form: FormReducer,
  routers: routerReducer,
})