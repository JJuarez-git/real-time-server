import * as UserController from "../controllers/user.controller"
import { Router } from "express";
const router = Router()

router.get('/', UserController.getAllUsers)

export default router