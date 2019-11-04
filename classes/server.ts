import express from 'express';
import { SERVER_PORT } from '../global/enviroment';


export default class Server {
    private static _instance: Server;

    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    start() {
        this.app.listen( this.port );
        console.log('Servidor Corriendo en el puerto ', this.port);
    }
}