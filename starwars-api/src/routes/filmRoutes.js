const express = require('express');
const filmController = require('../controllers/filmControllerTemp');

const router = express.Router();

router.get('/', filmController.getAll.bind(filmController));
router.post('/', filmController.create.bind(filmController));
router.put('/:id', filmController.update.bind(filmController));
router.delete('/:id', filmController.delete.bind(filmController));

module.exports = router;
