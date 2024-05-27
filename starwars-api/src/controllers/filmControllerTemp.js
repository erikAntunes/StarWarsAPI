const filmService = require('../services/filmService');

class FilmController {
    async getAll(req, res) {
        const films = await filmService.getAllFilms();
        return res.send(films);
    }

    async create(req, res) {
        const film = await filmService.createFilm(req.body);
        return res.send(film);
    }

    async update(req, res) {
        const film = await filmService.updateFilm(req.params.id, req.body);
        return res.send(film);
    }

    async delete(req, res) {
        const film = await filmService.deleteFilm(req.params.id);
        return res.send(film);
    }
}

module.exports = new FilmController();