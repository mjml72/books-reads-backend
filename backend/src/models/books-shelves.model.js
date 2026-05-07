import { dbConfiguration } from './src/config/db.js';

const db = await dbConfiguration();

export const BooksShelvesModel = {
  findAll: async () => {
    return await db.all('SELECT * FROM Books_Shelves');
  },

  findByBookId: async (id) => {
    return await db.get('SELECT * FROM Books_Shelves WHERE bookID = ?', [id]);
  },

  findByShelveId: async (id) => {
    return await db.get('SELECT * FROM Books_Shelves WHERE shelvesID = ?', [id]);
  },

  create: async (bookID, shelvesID) => {
    return await db.run(
      `INSERT INTO Books_Shelves (bookID, shelvesID)
       VALUES (?, ?)`
      [bookID, shelvesID]
    );
  },

  update: async (bookID, shelvesID) => {
    return await db.run(
      `UPDATE Books_Shelves SET bookID = ?, writerID = ? WHERE bookID = ? AND shelvesID = ?`,
      [bookID, shelvesID]
    );
  },

  delete: async (bookID, shelvesID) => {
    return await db.run('DELETE FROM Books_Shelves WHERE bookID = ? AND shelvesID = ?', [bookID, shelvesID]);
  }
};
