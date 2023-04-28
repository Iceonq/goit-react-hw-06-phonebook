import { useSelector } from 'react-redux';
import { deleteContact, filterContacts } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const ContactsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const contacts = useSelector(state => state.contacts);
  const filteredContacts = useSelector(state => state.filterContacts);
  const dispatch = useDispatch();

  const handleContactDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFiltering = e => {
    const currentSearchTerm = e.target.value.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(currentSearchTerm)
    );
    setSearchTerm(currentSearchTerm);
    dispatch(filterContacts(filteredContacts));
  };

  const displayContacts =
    filteredContacts?.length > 0 ? filteredContacts : contacts;

  return (
    <div>
      <h1>Contacts </h1>
      <p>Find contacts name</p>
      <input value={searchTerm} onChange={handleFiltering} />
      {displayContacts.map(contact => {
        return (
          <li name="contact" key={contact.id}>
            {contact.name} : {contact.number}
            <button onClick={() => handleContactDelete(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
