const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'Not authenticated' });

    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Access denied: insufficient privileges' });
    }

    next();
  };
};

module.exports = roleMiddleware;
