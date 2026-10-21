
export function users(req, res, next) {
  const { name, email, password } = req.body;

  const campos = [name, email, password];

  for (const campo of campos) {
    if (!campo || campo.trim() === "") {
      return res.status(400).json({
        error: "Los campos 'name', 'email', 'password' son obligatorios y no pueden estar vacíos"
      });

    }
  }

  next();
}