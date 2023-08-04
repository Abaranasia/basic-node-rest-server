const express = require('express');

class Server {
    constructor() {
        this.port= process.env.PORT; // 8080

        this.app = express();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();

    }

    middlewares() {
        this.app.use( express.static('public')) // Public static page

    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.send("You're getting from the server")
        });
    }

    listen () {
       this.app.listen(this.port, () => {
            console.log (`Server runnig on port ${this.port}`)
        });
    }
}

module.exports = Server;