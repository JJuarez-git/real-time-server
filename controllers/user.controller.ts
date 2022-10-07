import { Request, Response } from "express"
import { User } from '../models/User';

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll()
        res.json(users)

    } catch (error) {
        return res.status(500).json({ error });
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const { name, age } = req.body
        const newUser = await User.create({ name, age });
        res.json(newUser)

    } catch (error) {
        return res.status(500).json({ error });
    }
}


module.exports = {
    getAllUsers,
    createUser
}