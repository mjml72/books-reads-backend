import { dbConfiguration } from './src/config/db.js';

const db = await dbConfiguration();

export const ShelvesModel = {
  findAll: () => {
    return db.all('SELECT * FROM Shelves');
  },

  findById: (id) => {
    return db.get('SELECT * FROM Shelves WHERE shelvesID = ?', [id]);
  },

  create: ( name ) => {
    return db.run(
      `INSERT INTO Shelves (name)
       VALUES (?)`
      [name]
    );
  },

  update: (id, name ) => {
    return db.run(
      `UPDATE Shelves SET name = ? WHERE shelvesID = ?`,
      [name, id]
    );
  },

  delete: (id) => {
    return db.run('DELETE FROM Shelves WHERE shelvesID = ?', [id]);
  }
};
