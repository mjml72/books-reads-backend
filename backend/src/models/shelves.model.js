import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();


export const ShelvesModel = {

  findAll: async (user_id) => {
    return await db.all('SELECT * FROM Shelves WHERE user_id = ?', [user_id]);
  },

  findById: async (user_id, shelf_id) => {
    return await db.get('SELECT * FROM Shelves WHERE user_id = ? AND shelf_id = ?', [user_id, shelf_id]);
  },

  findByName: async (user_id, name) => {
    return await db.all('SELECT * FROM Shelves WHERE user_id = ? AND name LIKE ?',
      [user_id, `%${name}%`]);
  },

  create: async (name, user_id) => {
    return await db.run(
      'INSERT INTO Shelves (name, user_id) VALUES (?,?)',
      [name, user_id]
    );
  },

    // listar todos los libros de una estantería del usuario
  getAllBooksFromShelf: async(shelf_id) => {
    return await db.all(`
      SELECT * FROM Books b
      INNER JOIN Books_Shelves bs ON bs.book_id = b.book_id
      WHERE bs.shelf_id = ?`, [shelf_id]);
  },

  // listar todas las estanterias de un libro del usuario
  getAllShelvesFromBook: async(book_id, user_id)=>{
    return await db.all(`
      SELECT * FROM Shelves s
      INNER JOIN Books_Shelves bs ON bs.shelf_id = s.shelf_id
      WHERE bs.book_id = ? AND s.user_id = ?
      `, [book_id, user_id]);
  },

  // añadir libro a la estanteria del ususario
  addBookToShelf: async (shelf_id, book_id) => {
    return await db.run(
      'INSERT INTO Books_Shelves (book_id, shelf_id) VALUES (?, ?)',
      [book_id, shelf_id]
    );
  },

  // borrar libro a la lista de libros del ususario
  deleteBookFromShelf: async (book_id, shelf_id) => {
    return await db.run('DELETE FROM Books_Shelves WHERE book_id = ? AND shelf_id = ?', 
      [book_id, shelf_id]);
  },

  update: async (id, name, user_id) => {
    return await db.run(
      'UPDATE Shelves SET name = ? WHERE user_id = ? AND shelf_id = ?',
      [name, user_id, id]
    );
  },

  delete: async (id, user_id) => {
    return await db.run('DELETE FROM Shelves WHERE user_id = ? AND shelf_id = ?',
      [user_id, id]);
  }
};
