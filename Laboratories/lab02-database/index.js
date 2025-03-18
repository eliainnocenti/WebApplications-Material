const FilmLibrary = require('./filmLibrary');

const db = new FilmLibrary('films.db');

async function test() {
    try {
        console.log("All Films:", await db.getAllFilms());
        console.log("Favorite Films:", await db.getFavoriteFilms());
        console.log("Films Watched Today:", await db.getFilmsWatchedToday());
        console.log("Films Before Date:", await db.getFilmsBeforeDate('2024-01-01'));
        console.log("Films with Rating >= 4:", await db.getFilmsByRating(4));
        console.log("Films with 'Star' in Title:", await db.getFilmsByTitle('Star'));

        console.log(await db.addFilm("New Film", 1, "2024-03-11", 5));
        console.log(await db.deleteFilm(3));
        console.log(await db.resetWatchDates());
    } catch (err) {
        console.error(err);
    } finally {
        db.close();
    }
}

test();
