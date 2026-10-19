export function  shelves(req, res, next) {
  const { name, user_id } = req.body;

  if (!name || name.trim() === "" || !user_id) {
    return res.status(400).json({
      error: "Los campos 'name', 'user_id' son obligatorios y no pueden estar vacíos"
    });
  }

  next();
}
