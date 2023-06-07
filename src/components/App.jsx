import { Component } from 'react';
import Layout from './Layout/Layout';
import FormList from './FormList/FormList';
import initialContacts from './data/contacts.json';
import MainTitle from './Layout/Title';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount = () => {
    const contactsLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactsLS) {
      this.setState({ contacts: contactsLS });
    }
  };

  componentDidUpdate = (_, prevState) => {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  };

  addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const { contacts } = this.state;
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      alert(`${name}: is already in contacts`);
      Notiflix.Notify.failure(`${name}: is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getInitialContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const initialContacts = this.getInitialContacts();
    const { filter } = this.state;
    return (
      <Layout>
        <MainTitle title="Phonebook" />
        <FormList onSubmit={this.addContact} />
        <MainTitle title="Contacts" />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={initialContacts}
          onDelete={this.deleteContacts}
        />
      </Layout>
    );
  }
}

export default App;
