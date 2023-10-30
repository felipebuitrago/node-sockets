import { config } from 'dotenv';
config();

import express from 'express';
import { createServer } from 'node:http';
import { Server as SocketServer } from "socket.io";
import { socketController } from "./controllers/socketController.js";

const app = express();
const nodeHttpServer = createServer(app);

const corsOptions = { 
    cors : { 
        origin: process.env.CLIENT_URL
    }
};

const io = new SocketServer(nodeHttpServer, corsOptions);

io.on('connection', socketController );

// Starts server
io.listen(process.env.PORT);
console.log(`\n$$$$$ API listening on port ${process.env.PORT} $$$$$\n`);