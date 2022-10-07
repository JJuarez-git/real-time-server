import { io, Socket } from "socket.io-client";

export default class SocketConnection {

    private static _instance: SocketConnection;
    private _socket: Socket;
    private port = process.env.SOCKET_PORT || 6000;

    private constructor() {
        this._socket = io(`http://localhost:${this.port}`)
        this.connection()
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    private connection = () => {
        this._socket.on('connect', () => {
            console.log(`[SOCKET SERVER]: Connected to socket server at port ${6000} | ID: ${this._socket.id}`);
        })
        this._socket.on('disconnect', () => {
            console.log(`[SOCKET SERVER]: Disconnected from socket server`);
        })
    }

    public get socket() {
        return this._socket;
    }

}
