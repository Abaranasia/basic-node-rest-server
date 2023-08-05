const express = require('express');
var cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port= process.env.PORT; // 8080
        this.apiPath= '/api';


        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    }

    middlewares() {
        this.app.use(cors());
        this.app.use( express.static('public')); // Public static page
    }

    routes() {
        this.app.use(this.apiPath, require('../routes/api'))
    }

    listen () {
        this.app.listen(this.port, () => {
            console.log (`Server runnig on port ${this.port}`)
        });
    }
}

module.exports = Server;