const { Router }= require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        response: "get was ok",
        msg: "You're getting from the server",
    })
});

router.post('/', (req, res) => {
    res.status(201).json({
        response: "post was ok",
        msg: "You're posting to the server",
    })
});

router.put('/', (req, res) => {
    res.json({
        response: "put was ok",
        msg: "You're putting to the server",
    })
});

router.patch('/', (req, res) => {
    res.json({
        response: "patch was ok",
        msg: "You're patching to the server",
    })
});

router.delete('/', (req, res) => {
    res.json({
        response: "delete was ok",
        msg: "You're deleting from the server",
    })
});

module.exports = router;