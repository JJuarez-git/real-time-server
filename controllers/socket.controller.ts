import { Request, Response } from "express"
import SocketConnection from '../config/socket';

const socketInfo = (req: Request, res: Response) => {
    try {
        const socketName = "API Socket ID"
        const { active, connected, disconnected, id, receiveBuffer, sendBuffer } = SocketConnection.instance.socket
        res.json({ socketName, id, active, connected, disconnected, receiveBuffer, sendBuffer })

    } catch (error) {
        return res.status(500).json({ error });
    }
}

module.exports = {
    socketInfo
}