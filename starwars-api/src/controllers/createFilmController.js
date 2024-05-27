const createFilmService = require('../services/createFilmService');

class CreateFilmController {
    async create(req, res) {
        const film = await createFilmService.createFilm(req.body);
        return res.send(film);
    }
}

module.exports = new CreateFilmController();