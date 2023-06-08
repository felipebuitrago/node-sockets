const express = require('express');
const cors = requiere('cors');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        this.paths = {};

        //middlewares
        this.middlewares();

        //rutas
        this.routes();
    }

    middlewares(){

        //cors
        this.app.use( cors() );

        // public 
        this.app.use( express.static('public') );
    }

    routes(){

        //this.app.use( this.paths.auth, require('../../') )
    }

    listen(){

        this.app.listen( this.port, () => {
            console.log('$$$$ Server listening on port ', this.port, ' $$$$');
        })
    }
}

module.exports = Server;

