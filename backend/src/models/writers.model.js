import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();


export const WritersModel = {
  
  findAll: async () => {
    return await db.all('SELECT * FROM Writers');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Writers WHERE writer_id = ?', [id]);
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

    // listar todos los libros del escritor 
  getAllWriterBooks: async (writer_id) => {
    return await db.all(`
      SELECT * FROM Books b
      INNER JOIN Books_Writers bw ON b.book_id = bw.book_id
      WHERE bw.writer_id = ?`, [writer_id]);
  },

    // buscar escritores del libro   
  getWriterBook: async (book_id) => {
    return await db.all(`
      SELECT * FROM Writers w
      INNER JOIN Books_Writers bw ON bw.writer_id = w.writer_id
      WHERE bw.book_id = ?`, [book_id]);
  },

  // añadir libro a la lista de libros del escritor
  addToWritersBooks: async (writer_id, book_id) => {
    return await db.run(
      'INSERT INTO Books_Writers (writer_id, book_id) VALUES (?, ?)',
      [writer_id, book_id]
    );
  },

  // borrar libro a la lista de libros del escritor
  deleteFromWritersBooks: async (writer_id, book_id) => {
    return await db.run('DELETE FROM Books_Writers WHERE writer_id = ? AND book_id = ?', [writer_id, book_id]);
  },


  update: async (id, name) => {
    return await db.run(
      'UPDATE Writers SET name = ? WHERE writer_id = ?',
      [name, id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Writers WHERE writer_id = ?', [id]);
  }
};
