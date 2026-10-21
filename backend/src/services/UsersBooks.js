import { dbConfiguration } from "../config/db.js";



const db = await dbConfiguration();


// consulta a la base de datos la relacion usuario libro
export async function UsersBooks(user_id, book_id) {
  
    const libroEnBiblioteca = await db.get(
    'SELECT * FROM Users_Books WHERE user_id = ? AND book_id = ?',
    [user_id, book_id]
  );

  return libroEnBiblioteca;

}