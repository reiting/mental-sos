import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'CONTACTS';

const parseContacts = (contacts) =>
  JSON.parse(contacts).map((contacts) => {
    contacts.createdAt = new Date(contacts.createdAt)
    return contacts;
  });

export const fetchContacts = async () => {
    try {
      let contacts = await AsyncStorage.getItem(STORAGE_KEY);
  
      if (contacts === null) { return []; }
  
      return parseContacts(contacts);
    } catch (error) {
      console.log('Error fetching contacts', error);
    }
  }

  export const mergeContacts = (contacts, numbers) => {
    const singleContact = {
      contacts: contacts,
      numbers: numbers
    };
  
    return [...contacts, singleContact];
  }

  export const saveContacts = (contacts) => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }
  