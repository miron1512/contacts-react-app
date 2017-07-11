import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT
} from '../constants/action-types';

export function addContact(contactData) {
  return {
    type: ADD_CONTACT,
    payload: contactData,
  };
};

export function editContact(contactId, contactData) {
  return {
    type: EDIT_CONTACT,
    payload: {
      id: contactId,
      data: contactData,
    },
  };
};

export function deleteContact(contactId) {
  return {
    type: DELETE_CONTACT,
    payload: contactId,
  };
};