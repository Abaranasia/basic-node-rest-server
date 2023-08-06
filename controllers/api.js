const { response } = require('express');

const apiGet = (req, res = response) => {
    res.json({
        response: "get was ok",
        msg: "You're getting from the server",
    })
};

const apiPost = (req, res = response) => {
    res.status(201).json({
        response: "post was ok",
        msg: "You're posting to the server",
    })
}

const apiPut = (req, res = response) => {
    res.json({
        response: "put was ok",
        msg: "You're putting to the server",
    })
}

const apiPatch = (req, res = response) => {
    res.json({
        response: "patch was ok",
        msg: "You're patching to the server",
    })
}

const apiDelete = (req, res = response) => {
    res.json({
        response: "delete was ok",
        msg: "You're deleting from the server",
    })
}

module.exports = {
    apiGet,
    apiPost,
    apiPut,
    apiPatch,
    apiDelete,
}
