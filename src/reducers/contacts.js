import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from '../constants/action-types'
import { generateContacts } from '../utils';

const initialState = {
  contacts: generateContacts(30 + Math.round(Math.random() * 30)),
};

const handleAddContact = (state, data) => {
  const id = Math.max(...Object.keys(state.contacts), 0) + 1;
  return { ...state, contacts: { ...state.contacts, [id]: { ...data } } };
};

const handleEditContact = (state, { id, data }) => ({
  ...state,
  contacts: {
    ...state.contacts,
    [id]: { ...data },
  },
});

const handleDeleteContact = (state, id) => ({
  ...state,
  contacts: Object.keys(state.contacts).reduce((obj, key) => {
    if (key === id) {
      return obj;
    }
    return { ...obj, [key]: state.contacts[key] };
  }, {}),
});

const ContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return handleAddContact(state, action.payload);
    case EDIT_CONTACT:
      return handleEditContact(state, action.payload);
    case DELETE_CONTACT:
      return handleDeleteContact(state, action.payload);
    default:
      return state;
  }
};

export default ContactsReducer;