import { config } from 'dotenv'; config();
import express from 'express';
import { createServer } from 'node:http';
import { Server as ioServer } from "socket.io";
import { socketController } from "../controllers/socketController.js";

export class SocketServer {

    constructor() {
        
        this.app = express();
        this.nodeHttpServer = createServer(this.app);

        const corsOptions = { 
            cors : { 
                origin: process.env.CLIENT_URL
            }
        };
                
        this.io = new ioServer(this.nodeHttpServer, corsOptions);
        this.io.on('connection', socketController );
    };

    start() {       
        // Starts server
        this.io.listen(process.env.PORT);
        console.log(`\n$$$$$ API listening on port ${process.env.PORT} $$$$$\n`);
    };
};