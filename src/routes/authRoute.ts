import express from 'express';
import { loginController, profileController, registerController } from '../controllers/authController';
import authenticateToken from '../middlewares/authenticateToken';

const router = express.Router();

// Register
router.post("/auth/register", registerController);

// Login
router.post("/auth/login", loginController);

// Get user profile
router.get("/auth/profile", authenticateToken, profileController );

export default router;
