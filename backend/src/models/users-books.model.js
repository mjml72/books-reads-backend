import { dbConfiguration } from '../config/db.js';

const db = await dbConfiguration();

export const  UsersBooksModel= {
  findAll: async () => {
    return await db.all('SELECT * FROM Users_Books');
  },

  findByUserId: async (id) => {
    return await db.get('SELECT * FROM Users_Books WHERE userID = ?', [id]);
  },

  findByBookId: async (id) => {
    return await db.all('SELECT * FROM Users_Books WHERE bookID = ?', [id]);
  },

  findByIds : async (userID, bookID) =>{
    return await db.get('SELECT * FROM Users_Books WHERE userID = ? AND bookID = ?', [userID, bookID]);
  },

  
  create: async ( userID, bookID ) => {
    return await db.run(
      'INSERT INTO Users_Books (userID, bookID) VALUES (?, ?)',
      [ userID, bookID]
    );
  },


  delete: async (userID, bookID) => {
    return await db.run('DELETE FROM Users_Books WHERE userID = ? AND bookID = ?', [userID, bookID]);
  }
};
