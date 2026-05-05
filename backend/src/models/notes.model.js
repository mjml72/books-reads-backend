import { dbConfiguration } from './src/config/db.js';

const db = await dbConfiguration();

export const NotesModel = {
  findAll: () => {
    return db.all('SELECT * FROM Notes');
  },

  findById: (id) => {
    return db.get('SELECT * FROM Notes WHERE notesID = ?', [id]);
  },

  findByBookId: (id) => {
    return db.get('SELECT * FROM Notes WHERE bookID = ?', [id]);
  },

  create: (text, created, bookID) => {
    return db.run(
      `INSERT INTO Notes (text, created, bookID)
       VALUES (?, ?, ?)`
      [text, created, bookID]
    );
  },

  update: (notesID, text, created, bookID) => {
    return db.run(
      `UPDATE Notes SET text = ?, created = ? WHERE notesID = ? AND bookID = ?`,
      [text, created, notesID, bookID]
    );
  },

  delete: (notesID, bookID) => {
    return db.run('DELETE FROM Notes WHERE notesID = ? AND bookID = ?', [notesID, bookID]);
  }
};
