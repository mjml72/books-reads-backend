import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();


export const WritersModel = {
  
  findAll: async () => {
    return await db.all('SELECT * FROM Writers');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Writers WHERE writerID = ?', [id]);
  },

  findByName: async (name) => {
    return await db.all('SELECT * FROM Writers WHERE name LIKE ?', [`%${name}%`]);
  },

  create: async (name) => {
    return await db.run(
      'INSERT INTO Writers (name) VALUES (?)',
      [name]
    );
  },

  update: async (id, name) => {
    return await db.run(
      'UPDATE Writers SET name = ? WHERE writerID = ?',
      [name, id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Writers WHERE writerID = ?', [id]);
  }
};
