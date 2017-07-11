import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button,
} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'
import contactFormValidators from '../utils/contactFormValidators';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
    <FormGroup validationState={touched && error ? 'error' : null}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...input} placeholder={label} type={type} />
      {
        touched && error
        && < HelpBlock > {error}</HelpBlock>
      }
    </FormGroup>
  );

const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="firstName"
        label="First Name"
        type="text"
        component={renderField}
        validate={Object.values(contactFormValidators.firstNameValidators)}
      />
      <Field
        name="lastName"
        label="Last Name"
        component={renderField}
        validate={Object.values(contactFormValidators.lastNameValidators)}
      />
      <Field
        name="email"
        label="Email"
        component={renderField}
        validate={Object.values(contactFormValidators.emailValidators)}
      />
      <Button type="submit" bsStyle="primary">
        Submit
      </Button>
    </form>
  );
}

export default reduxForm({
  form: 'contact'
})(ContactForm);