import { dbConfiguration } from './src/config/db.js';

const db = await dbConfiguration();

export const BookStatusModel = {
  findAll: async () => {
    return await db.all('SELECT * FROM BookStatus');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM BookStatus WHERE bookID = ?', [id]);
  },

  create: async (data) => {
    const {bookID, progress, status, rating, startReading, endReading}=data;
    return await db.run(
      `INSERT INTO BookStatus (bookID, progress, status, rating, startReading, endReading)
       VALUES (?, ?, ?, ?, ?, ?)`
      [bookID, progress, status, rating, startReading, endReading]
    );
  },

  update: async ( data) => {
    const {bookID, progress, status, rating, startReading, endReading}=data;
    return await db.run(
      `UPDATE BookStatus SET progress = ?, status = ?, rating = ?, startReading = ?, endReading = ? WHERE bookID = ?`,
      [progress, status, rating, startReading, endReading, bookID]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM BookStatus WHERE bookID = ?', [id]);
  }
};
