import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();


export const UsersModel = {

  findAll: async () => {
    return await db.all('SELECT * FROM Users');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Users WHERE user_id = ?', [id]);
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

  // listar todos los libros del usuario
  getAllUserBooks: async (user_id) => {
    return await db.all(`
      SELECT * FROM Books b
      INNER JOIN Users_Books ub ON b.book_id = ub.book_id
      WHERE ub.user_id = ?`, [user_id]);
  },

  // buscar  libro del usuario 
  getUserBook: async (user_id, book_id) => {
    return await db.get(`
      SELECT * FROM Books b
      INNER JOIN Users_Books ub ON b.book_id = ub.book_id
      WHERE ub.user_id = ? AND b.book_id = ?`, [user_id, book_id]);

  },

  // añadir libro a la lista de libros del ususario
  addToUserBooks: async (user_id, book_id) => {
    return await db.run(
      'INSERT INTO Users_Books (user_id, book_id) VALUES (?, ?)',
      [user_id, book_id]
    );
  },

  // borrar libro a la lista de libros del ususario
  deleteFromUserBooks: async (user_id, book_id) => {
    return await db.run('DELETE FROM Users_Books WHERE user_id = ? AND book_id = ?', [user_id, book_id]);
  },



  update: async (id, name, email, password) => {
    return await db.run(
      'UPDATE Users SET name = ?, email = ?, password = ? WHERE user_id = ?',
      [name, email, password, id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Users WHERE user_id = ?', [id]);
  }
};
