import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();


export const UsersModel = {
  
  findAll: async () => {
    return await db.all('SELECT * FROM Users');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Users WHERE userID = ?', [id]);
  },

  findByName: async (name) => {
    return await db.all('SELECT * FROM Users WHERE name LIKE ?', [`%${name}%`]);
  },

  create: async (name, email, password) => {
    return await db.run(
      'INSERT INTO Users (name, email, password) VALUES (?,?,?)',
      [name, email, password]
    );
  },

  update: async (id, name, email, password) => {
    return await db.run(
      'UPDATE Users SET name = ?, email = ?, password = ? WHERE userID = ?',
      [name, email, password, id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Users WHERE userID = ?', [id]);
  }
};
