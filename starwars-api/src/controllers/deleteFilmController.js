const deleteFilmService = require('../services/deleteFilmService');

class DeleteFilmController {
    async delete(req, res) {
        const film = await deleteFilmService.deleteFilm(req.params.id);
        return res.send(film);
    }
}

module.exports = new DeleteFilmController();