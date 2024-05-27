const updateFilmService = require('../services/updateFilmService');

class UpdateFilmController {
    async update(req, res) {
        const film = await updateFilmService.updateFilm(req.params.id, req.body);
        return res.send(film);
    }
}

module.exports = new UpdateFilmController();