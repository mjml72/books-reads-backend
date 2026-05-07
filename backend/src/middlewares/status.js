export function  Status(req, res, next) {
  const { status } = req.body;

  if (!status || status.trim() === "") {
    return res.status(400).json({
      error: "El campo 'status' es obligatorio y no puede estar vacío"
    });
  }

  next();
}
