const Film = require('../models/filmSchema');

class CreateFilmServiceTemp {
    async createFilm(data) {
        const film = new Film(data);
        await film.save();
        return film;
    }
}

module.exports = new CreateFilmServiceTemp();