import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Glyphicon, Button } from 'react-bootstrap';

class ContactsTable extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
  };

  static defaultProps = {
    contacts: [],
    deleteContact: () => { },
  };

  constructor(props) {
    super(props);

    this.renderTableRow = this.renderTableRow.bind(this);
  }

  renderTableRow({ id, firstName, lastName, email }) {
    return (
      <tr key={id}>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>
          <Link to={`/contacts/${id}`}>
            <Button bsStyle="warning" bsSize="xsmall">
              <Glyphicon glyph="pencil" />
            </Button>
          </Link>
          <Button bsStyle="danger" bsSize="xsmall" onClick={() => this.props.deleteContact(id)}>
            <Glyphicon glyph="trash" />
          </Button>
        </td>
      </tr>
    );
  }

  render() {
    const { contacts } = this.props;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts && contacts.map(this.renderTableRow)}
        </tbody>
      </Table>
    );
  }
}

export default ContactsTable;
