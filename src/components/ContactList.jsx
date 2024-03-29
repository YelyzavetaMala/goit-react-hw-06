import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import { deleteContact } from '../redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;