const Film = require('../models/filmSchema');

class UpdateFilmService {
    async updateFilm(id, data) {
        return await Film.findByIdAndUpdate(id, data, { new: true });
    }
}

module.exports = new UpdateFilmService();