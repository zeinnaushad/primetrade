import jwt from "jsonwebtoken";

export function auth(req, res, next) {
  const h = req.headers.authorization;
  if (!h) return res.status(401).json({ message: "no token" });
  const t = h.split(" ")[1];
  try {
    const data = jwt.verify(t, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch {
    return res.status(401).json({ message: "bad token" });
  }
}
