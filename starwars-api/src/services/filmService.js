const Film = require('../models/filmSchema');

class FilmService {
    async getAllFilms() {
        return await Film.find();
    }

    async getFilmById(id) {
        return await Film.findById(id);
    }

    async createFilm(data) {
        const film = new Film(data);
        await film.save();
        return film;
    }

    async updateFilm(id, data) {
        return await Film.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteFilm(id) {
        return await Film.findByIdAndDelete(id);
    }
}

module.exports = new FilmService();
