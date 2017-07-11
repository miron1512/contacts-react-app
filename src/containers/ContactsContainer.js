import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, editContact, deleteContact } from '../actions/contacts';

const mapStateToProps = ({ ContactsReducer }) => ({
  contacts: ContactsReducer.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (contactData) => {
    dispatch(addContact(contactData));
  },
  editContact: (contactId, contactData) => {
    dispatch(editContact(contactId, contactData));
  },
  deleteContact: (contactId) => {
    dispatch(deleteContact(contactId));
  },
});

const ContactsContainer = (props) => {
  const { children, contacts, addContact, editContact, deleteContact } = props;

  if (typeof children === 'function') {
    return children({
      contacts,
      addContact,
      editContact,
      deleteContact,
    });
  }
  return React.cloneElement(children, {
    contacts,
    addContact,
    editContact,
    deleteContact,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);