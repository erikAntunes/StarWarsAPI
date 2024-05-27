const Film = require('../models/filmSchema');

class DeleteFilmService {
    async deleteFilm(id) {
        return await Film.findByIdAndDelete(id);
    }
}

module.exports = new DeleteFilmService();
