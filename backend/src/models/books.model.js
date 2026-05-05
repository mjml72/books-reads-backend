import { dbConfiguration } from './config/db.js';

const db = await dbConfiguration();


export const BooksModel = {
  findAll: () => {
    return db.all('SELECT * FROM Books');
  },

  findById: (id) => {
    return db.get('SELECT * FROM Books WHERE bookID = ?', [id]);
  },

  create: (title, description, published, categories, cover, pages, isbn) => {
    return db.run(
      `INSERT INTO Books (title, description, published, categories, cover, pages, isbn)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
      [title, description, published, categories, cover, pages, isbn]
    );
  },

  update: (id, title, description, published, categories, cover, pages, isbn) => {
    return db.run(
      `UPDATE Books SET title = ?, description = ?, published = ?, categories = ?, cover = ?,
       pages = ?, isbn = ? WHERE bookID = ?`,
      [title, description, published, categories, cover, pages, isbn, id]
    );
  },

  delete: (id) => {
    return db.run('DELETE FROM Books WHERE bookID = ?', [id]);
  }
};
