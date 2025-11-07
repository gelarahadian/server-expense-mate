import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { jwtSecret } from "../config/config";

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token tidak ditemukan" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token tidak valid" });
    }
    const payload = decoded as JwtPayload | string | undefined;
    if (payload && typeof payload !== 'string' && typeof payload.userId !== 'undefined') {
      req.userId = String(payload.userId);
    }
    next();
  });
};

export default authenticateToken
