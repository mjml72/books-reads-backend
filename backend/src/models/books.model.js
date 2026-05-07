import { dbConfiguration } from './config/db.js';

const db = await dbConfiguration();


export const BooksModel = {
  findAll: async () => {
    return await db.all('SELECT * FROM Books');
  },

  findById: async (id) => {
    return await db.get('SELECT * FROM Books WHERE bookID = ?', [id]);
  },

  findByTitle: async (title) => {
    let search = `%${title}%`
    return await db.get('SELECT * FROM Books WHERE title = ? OR title LIKE ?', [title, search]);
  },

  create: async (data) => {
    const {title, description, published, categories, cover, pages, isbn} = data;
    return await db.run(
      `INSERT INTO Books (title, description, published, categories, cover, pages, isbn)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
      [title, description, published, categories, cover, pages, isbn]
    );
  },

  update: async (id, data) => {
    const {title, description, published, categories, cover, pages, isbn} = data;
    return await db.run(
      `UPDATE Books SET title = ?, description = ?, published = ?, categories = ?, cover = ?,
       pages = ?, isbn = ? WHERE bookID = ?`,
      [title, description, published, categories, cover, pages, isbn, id]
    );
  },

  delete: async (id) => {
    return await db.run('DELETE FROM Books WHERE bookID = ?', [id]);
  }
};
