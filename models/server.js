const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io     = require('socket.io')( this.server );

        this.paths = {};

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();

        // Sockets
        this.sockets();
    }

    middlewares(){

        // cors
        this.app.use( cors() );

        // public 
        this.app.use( express.static('public') );
    }

    routes(){

        //this.app.use( this.paths.auth, require('../../') )
    }

    sockets() {

        this.io.on('connection', socketController );
    }

    listen(){

        this.server.listen( this.port, () => {
            console.log('$$$$ Server listening on port ', this.port, ' $$$$');
        })
    }
}

module.exports = Server;
