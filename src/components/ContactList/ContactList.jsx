import React from 'react';
import { ListWrapper, Item, Fragment } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListWrapper>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Fragment>{name}</Fragment>
          <Fragment>{number}</Fragment>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ListWrapper>
  );
};

export default ContactList;
