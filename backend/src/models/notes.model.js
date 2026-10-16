import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();

export const NotesModel = {

  
  findByBookId: async (book_id, user_id) => {
    return await db.all('SELECT * FROM Notes WHERE book_id = ? AND user_id = ?', 
      [book_id, user_id]);
  },
  
  findById: async (id) => {
    return await db.get('SELECT * FROM Notes WHERE note_id = ?', [id]);
  },


  create: async (text, created, book_id, user_id) => {
    return await db.run(
      'INSERT INTO Notes (text, created, book_id, user_id) VALUES (?, ?, ?, ?)',
      [text, created, book_id, user_id]
    );
  },

  update: async (note_id, text, created, book_id, user_id) => {
    return await db.run(
      'UPDATE Notes SET text = ?, created = ? WHERE note_id = ? AND book_id = ? AND user_id = ?',
      [text, created, note_id, book_id, user_id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Notes WHERE note_id = ?', [id]);
  }
};
