import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();


export const ShelvesModel = {
  findAll: async () => {
    return await db.all('SELECT * FROM Shelves');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Shelves WHERE shelvesID = ?', [id]);
  },

  findByName: async (name) => {
    return await db.all('SELECT * FROM Shelves WHERE name LIKE ?', [`%${name}%`]);
  },

  create: async (name) => {
    return await db.run(
      'INSERT INTO Shelves (name) VALUES (?)',
      [name]
    );
  },

  update: async (id, name) => {
    return await db.run(
      'UPDATE Shelves SET name = ? WHERE shelvesID = ?',
      [name, id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Shelves WHERE shelvesID = ?', [id]);
  }
};
