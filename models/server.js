const express = require('express');
var cors = require('cors')

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
        this.app.use(cors());
        this.app.use( express.static('public')); // Public static page
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                response: "get was ok",
                msg: "You're getting from the server",
            })
        });

        this.app.post('/api', (req, res) => {
            res.status(201).json({
                response: "post was ok",
                msg: "You're posting to the server",
            })
        });

        this.app.put('/api', (req, res) => {
            res.json({
                response: "put was ok",
                msg: "You're putting to the server",
            })
        });

        this.app.patch('/api', (req, res) => {
            res.json({
                response: "patch was ok",
                msg: "You're patching to the server",
            })
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                response: "delete was ok",
                msg: "You're deleting from the server",
            })
        });
    }

    listen () {
       this.app.listen(this.port, () => {
            console.log (`Server runnig on port ${this.port}`)
        });
    }
}

module.exports = Server;