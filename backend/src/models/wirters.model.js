import { dbConfiguration } from './config/db.js';

const db = await dbConfiguration();

export const WritersModel = {
  findAll: () => {
    return db.all('SELECT * FROM Writers');
  },

  findById: (id) => {
    return db.get('SELECT * FROM Writers WHERE wirterID = ?', [id]);
  },

  create: (name) => {
    return db.run(
      `INSERT INTO Writers (name)
       VALUES (?)`
      [name]
    );
  },

  update: (id, name) => {
    return db.run(
      `UPDATE Writers SET name = ? WHERE writerID = ?`,
      [name, id]
    );
  },

  delete: (id) => {
    return db.run('DELETE FROM Writers WHERE writerID = ?', [id]);
  }
};
