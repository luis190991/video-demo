const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

//CRUD = modelo, objeto ó registro

router.post('/', controller.create);

router.get('/', controller.list);

router.get('/:id', controller.index);

router.patch('/:id', controller.replace);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
