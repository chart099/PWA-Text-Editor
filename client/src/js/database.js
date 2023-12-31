import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const textsDb = await openDB('texts', 1); 
  const text = textsDb.transaction('texts', 'readwrite');
  const store = text.objectStore('texts');
  const request = store.getAll();
  const result = await request;
  console.error('putDb not implemented')
  return result;
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const textsDb = await openDB('texts', 1);
  const text = textsDb.transaction('texts', 'readonly');
  const store = text.objectStore('texts');
  const request = store.getAll();
  const result = await request;
  console.error('getDb not implemented');
  return result;
 
}


initdb();
