import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();

export const BookStatusModel = {

  findById: async (user_id, book_id) => {
    return await db.get('SELECT * FROM BookStatus WHERE book_id = ? AND user_id = ?', 
      [book_id, user_id]);
  },

  create: async (user_id, book_id, progress, status, rating, startReading, endReading) => {
    return await db.run(
      'INSERT INTO BookStatus (user_id, book_id, progress, status, rating, startReading, endReading) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, book_id, progress, status, rating, startReading, endReading]
    );
  },


  update: async (user_id, book_id, progress, status, rating, startReading, endReading) => {
    return await db.run(
      'UPDATE BookStatus SET progress = ?, status = ?, rating = ?, startReading = ?, endReading = ? WHERE book_id = ? AND user_id = ?',
      [progress, status, rating, startReading, endReading, book_id, user_id]
    );
  },

  delete: async (user_id, book_id) => {
    return await db.run('DELETE FROM BookStatus WHERE book_id = ? AND user_id',
      [book_id, user_id]);
  }
};
