import { useState } from 'react';
import Layout from './Layout/Layout';
import FormList from './FormList/FormList';
import initialContacts from './data/contacts.json';
import useLocalStorage from './hook/useLocalStorage';
import MainTitle from './Layout/Title';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
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

    setContacts(prevState => [...prevState, contact]);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContacts = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <Layout>
      <MainTitle title="Phonebook" />
      <FormList onSubmit={addContact} />
      <MainTitle title="Contacts" />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
    </Layout>
  );
}

export default App;
