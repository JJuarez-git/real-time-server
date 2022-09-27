import { Request, Response } from "express"
import { User } from '../models/User';

export const getAllUsers = (req: Request, res: Response) => {
    try {
        const users = User.findAll()
        res.json(users)
    } catch (error) {
        return res.status(500).json({ error });
    }

}


module.exports = {
    getAllUsers
}