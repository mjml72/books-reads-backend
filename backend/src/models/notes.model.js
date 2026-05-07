import { dbConfiguration } from './src/config/db.js';

const db = await dbConfiguration();

export const NotesModel = {
  findAll: async () => {
    return await db.all('SELECT * FROM Notes');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Notes WHERE notesID = ?', [id]);
  },

  findByBookId: async (id) => {
    return await db.get('SELECT * FROM Notes WHERE bookID = ?', [id]);
  },

  create: async (text, created, bookID) => {
    return await db.run(
      `INSERT INTO Notes (text, created, bookID)
       VALUES (?, ?, ?)`
      [text, created, bookID]
    );
  },

  update: async (notesID, text, created, bookID) => {
    return await db.run(
      `UPDATE Notes SET text = ?, created = ? WHERE notesID = ? AND bookID = ?`,
      [text, created, notesID, bookID]
    );
  },

  delete: async (notesID, bookID) => {
    return await db.run('DELETE FROM Notes WHERE notesID = ? AND bookID = ?', [notesID, bookID]);
  }
};
