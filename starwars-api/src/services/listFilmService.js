const Film = require('../models/filmSchema');

class ListFilmService {
    async getAllFilms() {
        return await Film.find();
    }
}

module.exports = new ListFilmService();
