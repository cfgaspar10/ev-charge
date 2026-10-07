/**
 * Middleware para autenticação de requisições administrativas
 */
function authAdmin(req, res, next) {
  const adminKeyConfigurada = process.env.ADMIN_KEY || 'admin123';

  // Aceita chave via cabeçalho x-admin-key, Authorization ou query param
  const authHeader = req.headers['authorization'];
  let token = null;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  const adminKey = req.headers['x-admin-key'] || token || req.query.adminKey;

  if (!adminKey || adminKey !== adminKeyConfigurada) {
    return res.status(401).json({
      erro: 'Acesso não autorizado. Senha/chave de administrador ausente ou inválida.'
    });
  }

  next();
}

module.exports = authAdmin;
