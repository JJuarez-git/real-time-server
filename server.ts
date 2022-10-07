import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv'
import { sequelize } from './config/database';
import SocketConnection from './config/socket';
dotenv.config()

//ROUTES
import UserRoutes from './routes/user.routes';
import SocketRoutes from './routes/socket.routes';

export default class Server {

    private app: express.Application;
    private port = process.env.PORT || 5000
    private API_URI = process.env.API_URI

    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    private config() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }

    private routes() {
        this.app.use(`${this.API_URI}/users`, UserRoutes)
        this.app.use(`${this.API_URI}/socket`, SocketRoutes)
    }

    public async start() {
        try {
            await sequelize.sync({ force: true })
            this.app.listen(this.port, () => {
                console.log(`[API SERVER]: Listening at http://localhost:${this.port}${this.API_URI}`);
                console.log(`[DB]: Connected to "${sequelize.getDatabaseName()}", ${sequelize.getDialect()}`);
            })
            SocketConnection.instance
        } catch (error) {
            console.error(`[ERROR]: ${error}`)
        }
    }

}