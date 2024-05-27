const express = require('express');
const listFilmController = require('../controllers/listFilmController');
const createFilmController = require('../controllers/createFilmController');
const updateFilmController = require('../controllers/updateFilmController');
const deleteFilmController = require('../controllers/deleteFilmController');

const router = express.Router();

router.get('/', listFilmController.getAll.bind(listFilmController));
router.post('/', createFilmController.create.bind(createFilmController));
router.put('/:id', updateFilmController.update.bind(updateFilmController));
router.delete('/:id', deleteFilmController.delete.bind(deleteFilmController));

module.exports = router;
