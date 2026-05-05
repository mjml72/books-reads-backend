import { dbConfiguration } from './config/db.js';

const db = await dbConfiguration();

export const  BooksWritersModel= {
  findAll: () => {
    return db.all('SELECT * FROM Books_Writers');
  },

  findByBookId: (id) => {
    return db.get('SELECT * FROM Books_Writers WHERE bookID = ?', [id]);
  },

  findByWriterId: (id) => {
    return db.get('SELECT * FROM Books_Writers WHERE writerID = ?', [id]);
  },

  create: ( bookID, writerID ) => {
    return db.run(
      `INSERT INTO Books_Writers (bookID, writerID)
       VALUES (?, ?)`
      [ bookID, writerID]
    );
  },

  update: ( bookID, writerID ) => {
    return db.run(
      `UPDATE Books_Writers SET bookID = ?, writerID = ? WHERE bookID = ? AND writerID = ?`,
      [bookID, writerID]
    );
  },

  delete: (bookID, writerID) => {
    return db.run('DELETE FROM Books_Writers WHERE bookID = ? AND writerID = ?', [bookID, writerID]);
  }
};
