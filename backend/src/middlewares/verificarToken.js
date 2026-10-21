import jwt from 'jsonwebtoken';



process.loadEnvFile('./.env');
const secretKey = process.env.SECRET_KEY;

export function verificarToken(req, res, next) {


  // El formato común es: "Bearer TOKEN"
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ error: 'Se requiere un token de autenticación' });
  }

  jwt.verify(token, secretKey, (err) => {
    if (err) {
      return res.status(401).json({ error: 'Token no correcto' });
    }

    next();
  });
}