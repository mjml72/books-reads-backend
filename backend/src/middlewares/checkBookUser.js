import { dbConfiguration } from "../config/db.js";
import { UsersBooks } from "../services/UsersBooks.js";

const db = await dbConfiguration();



// comprueba que el libro esta en la biblioteca del ususario
export const checkBookUser = async (req, res, next) => {

  const { userId, bookId } = req.params;

  const libroEnBiblioteca = await UsersBooks(userId, bookId);

  if (!libroEnBiblioteca) {
    return res.status(403).json({ error: "Este libro no está en la biblioteca del usuario." });
  }

  next(); // Si existe, continúa al controlador de forma segura
};
