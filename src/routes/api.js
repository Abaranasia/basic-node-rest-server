const { Router } = require('express');
const { 
    apiGet, 
    apiPost, 
    apiPut, 
    apiDelete, 
    apiPatch,
} = require('../controllers/api');

const router = Router();

router.get('/', apiGet);

router.post('/', apiPost);

router.put('/', apiPut);

router.patch('/', apiPatch);

router.delete('/', apiDelete);

module.exports = router;