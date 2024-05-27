const listFilmService = require('../services/listFilmService');

class ListFilmController {
    async getAll(req, res) {
        const films = await listFilmService.getAllFilms();
        return res.send(films);
    }
}

module.exports = new ListFilmController();