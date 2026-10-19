import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();

export const BookStatusModel = {

  findById: async (user_id, book_id) => {
    return await db.get('SELECT * FROM BookStatus WHERE book_id = ? AND user_id = ?', 
      [book_id, user_id]);
  },

  create: async (user_id, book_id, progress, status, rating, start_reading, end_reading) => {
    return await db.run(
      'INSERT INTO BookStatus (user_id, book_id, progress, status, rating, start_reading, end_reading) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [user_id, book_id, progress, status, rating, start_reading, end_reading]
    );
  },


  update: async (user_id, book_id, progress, status, rating, start_reading, end_reading) => {
    return await db.run(
      'UPDATE BookStatus SET progress = ?, status = ?, rating = ?, start_reading = ?, end_reading = ? WHERE book_id = ? AND user_id = ?',
      [progress, status, rating, start_reading, end_reading, book_id, user_id]
    );
  },

  delete: async (user_id, book_id) => {
    return await db.run('DELETE FROM BookStatus WHERE user_id = ? AND book_id = ?',
      [user_id, book_id]);
  }
};
