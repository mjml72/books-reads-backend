
export function Title(req, res, next) {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      error: "El campo 'title' es obligatorio y no puede estar vacío"
    });
  }

  next();
}
