import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectContacts,
} from 'redux/selectors';

// conponents
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import { ShowButton } from 'components/ShowButton/showButton';
import { CountMessage } from 'components/CountMessage/CountMessage';
import { getCountMessage } from 'utils/getCountMessage';

export const ContactsBlock = ({ isContactFormVisible, toggleContactFormVisibility }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);




  return (
    <>
      {isContactFormVisible && (
        <CountMessage text={getCountMessage(contacts.length)} />
      )}
      <ShowButton
        onButtonChange={toggleContactFormVisibility}
      />
      {!isContactFormVisible && (
        <>
          <Title title="Contacts" />
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};
