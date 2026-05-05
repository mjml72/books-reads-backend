import { dbConfiguration } from './src/config/db.js';

const db = await dbConfiguration();

export const BookStatusModel = {
  findAll: () => {
    return db.all('SELECT * FROM BookStatus');
  },

  findById: (id) => {
    return db.get('SELECT * FROM BookStatus WHERE bookID = ?', [id]);
  },

  create: (bookID, progress, status, rating, startReading, endReading) => {
    return db.run(
      `INSERT INTO BookStatus (bookID, progress, status, rating, startReading, endReading)
       VALUES (?, ?, ?, ?, ?, ?)`
      [bookID, progress, status, rating, startReading, endReading]
    );
  },

  update: (bookID, progress, status, rating, startReading, endReading ) => {
    return db.run(
      `UPDATE BookStatus SET progress = ?, status = ?, rating = ?, startReading = ?, endReading = ? WHERE bookID = ?`,
      [progress, status, rating, startReading, endReading, bookID]
    );
  },

  delete: (id) => {
    return db.run('DELETE FROM BookStatus WHERE bookID = ?', [id]);
  }
};
