import { dbConfiguration } from './src/config/db.js';

const db = await dbConfiguration();

export const BooksShelvesModel = {
  findAll: () => {
    return db.all('SELECT * FROM Books_Shelves');
  },

  findByBookId: (id) => {
    return db.get('SELECT * FROM Books_Shelves WHERE bookID = ?', [id]);
  },

  findByShelveId: (id) => {
    return db.get('SELECT * FROM Books_Shelves WHERE shelvesID = ?', [id]);
  },

  create: (bookID, shelvesID) => {
    return db.run(
      `INSERT INTO Books_Shelves (bookID, shelvesID)
       VALUES (?, ?)`
      [bookID, shelvesID]
    );
  },

  update: (bookID, shelvesID) => {
    return db.run(
      `UPDATE Books_Shelves SET bookID = ?, writerID = ? WHERE bookID = ? AND shelvesID = ?`,
      [bookID, shelvesID]
    );
  },

  delete: (bookID, shelvesID) => {
    return db.run('DELETE FROM Books_Shelves WHERE bookID = ? AND shelvesID = ?', [bookID, shelvesID]);
  }
};
