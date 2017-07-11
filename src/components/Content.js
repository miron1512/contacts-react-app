import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ContactsContainer from '../containers/ContactsContainer';
import ContactForm from './ContactForm';
import ContactsTable from './ContactsTable';
import Pagination from './Pagination';
import { parseQuery } from '../utils';
import { CONTACTS_PER_PAGE } from '../constants';


const renderContactTable = ({ history, location }) => (
  <div>
    <h1>Contacts:</h1>
    <ContactsContainer>
      {
        ({ contacts, deleteContact }) => {
          const contactsCount = Object.keys(contacts).length;
          const pages = Math.ceil(contactsCount / CONTACTS_PER_PAGE);
          const { page: currentPage = 1 } = parseQuery(location.search);
          if (pages && (currentPage < 1 || currentPage > pages)) {
            history.push('/contacts');
            return null;
          }

          const selectedContacts = Object.keys(contacts)
            .slice((currentPage - 1) * CONTACTS_PER_PAGE, currentPage * CONTACTS_PER_PAGE)
            .map(id => ({ ...contacts[id], id }));

          return (
            <div>
              <ContactsTable contacts={selectedContacts} deleteContact={deleteContact} />
              {
                pages > 1
                && <Pagination
                  component={({ eventKey, children }) => {
                    if (eventKey >= 1 && eventKey <= pages) {
                      return (<Link to={`/contacts?page=${eventKey}`}>{children}</Link>);
                    }
                    return children;
                  }}
                  items={pages}
                  activePage={currentPage}
                />
              }
              <Link to={`/contacts/new`}>
                <Button bsStyle="success" >
                  Add
              </Button>
              </Link>
            </div>
          );
        }
      }
    </ContactsContainer>
  </div>
);

const renderNewContactForm = ({ history }) => (
  <div>
    <h1>New Contact</h1>
    <ContactsContainer>
      {
        ({ addContact }) => (
          <ContactForm
            onSubmit={(data) => {
              addContact(data);
              history.push('/contacts');
            }} />
        )
      }
    </ContactsContainer>
  </div>
);

const renderEditContactForm = ({ history, match }) => (
  <div>
    <h1>Edit {match.params.id} сontact</h1>
    <ContactsContainer>
      {
        ({ contacts, editContact }) => (
          contacts[match.params.id]
            ? <ContactForm
              initialValues={contacts[match.params.id]}
              onSubmit={(data) => {
                editContact(match.params.id, data);
                history.push('/contacts');
              }} />
            : history.push('/contacts/new') || null
        )
      }
    </ContactsContainer>
  </div>
);

const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/contacts" render={renderContactTable} />
        <Route exact path="/contacts/new" render={renderNewContactForm} />
        <Route exact path="/contacts/:id" render={renderEditContactForm} />
      </Switch>
    </div>
  );
};

export default Content;