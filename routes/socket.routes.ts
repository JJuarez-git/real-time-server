import { Router } from "express";
const SocketController = require('../controllers/socket.controller');
const router = Router()

router.get('/', SocketController.socketInfo)

export default router