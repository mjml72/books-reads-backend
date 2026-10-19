export function requerirCampos(campos) {
  return (req, res, next) => {
    const errores = [];

    campos.forEach((campo) => {
      const valor = req.body[campo];
      
      // Comprueba si no existe, si es string vacío tras quitar espacios, etc.
      if (!valor || (typeof valor === 'string' && valor.trim() === '')) {
        errores.push(`El campo "${campo}" es obligatorio.`);
      }
    });

    if (errores.length > 0) {
      return res.status(400).json({ errores });
    }

    next();
  };
};

// Uso en la ruta (puedes pasarle una lista de los campos que quieras)
// app.post('/productos', requerirCampos(['titulo', 'precio']), (req, res) => {
//   res.send('Producto registrado');
// });
