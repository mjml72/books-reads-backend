import { dbConfiguration } from './config/db.js';

const db = await dbConfiguration();

export const  BooksWritersModel= {
  findAll: async () => {
    return await db.all('SELECT * FROM Books_Writers');
  },

  findByBookId: async (id) => {
    return await db.get('SELECT * FROM Books_Writers WHERE bookID = ?', [id]);
  },

  findByWriterId: async (id) => {
    return await db.get('SELECT * FROM Books_Writers WHERE writerID = ?', [id]);
  },

  create: async ( bookID, writerID ) => {
    return await db.run(
      `INSERT INTO Books_Writers (bookID, writerID)
       VALUES (?, ?)`
      [ bookID, writerID]
    );
  },

  update: async( bookID, writerID ) => {
    return  await db.run(
      `UPDATE Books_Writers SET bookID = ?, writerID = ? WHERE bookID = ? AND writerID = ?`,
      [bookID, writerID]
    );
  },

  delete: async (bookID, writerID) => {
    return await db.run('DELETE FROM Books_Writers WHERE bookID = ? AND writerID = ?', [bookID, writerID]);
  }
};
