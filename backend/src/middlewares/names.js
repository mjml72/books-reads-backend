export function  Names(req, res, next) {
  const { name } = req.body;

  if (!name || name.trim() === "") {
    return res.status(400).json({
      error: "El campo 'name' es obligatorio y no puede estar vacío"
    });
  }

  next();
}
