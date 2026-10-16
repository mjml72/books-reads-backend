import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();


export const BooksModel = {
  findAll: async () => {
    return await db.all('SELECT * FROM Books');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Books WHERE book_id = ?', [id]);
  },

  findByTitle: async (title) => {
    return await db.all('SELECT * FROM Books WHERE title LIKE ?', [`%${title}%`]);
  },


  create: async (title, description, published, cover, pages, isbn ) => {

    return await db.run(
      'INSERT INTO Books (title, description, published, cover, pages, isbn) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, published, cover, pages, isbn]
    );
  },

  update: async (id, title, description, published, cover, pages, isbn ) => {

    return await db.run(
      'UPDATE Books SET title = ?, description = ?, published = ?, cover = ?, pages = ?, isbn = ? WHERE book_id = ?',
      [title, description, published, cover, pages, isbn, id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Books WHERE book_id = ?', [id]);
  }
};
