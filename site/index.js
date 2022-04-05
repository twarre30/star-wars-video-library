const movieListingContainer = document.querySelector('.movieListing')
    /*const imdbIDs = [{
            id: 4,
            url: 'https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },

        {
            id: 5,
            url: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
        },
        {
            id: 6,
            url: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
            id: 1,
            url: 'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
            id: 2,
            url: 'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg'
        },
        {
            id: 3,
            url: 'https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg'
        },
    ]


    const poster = Promise.all(imdbIDs.map(id => id.url).map(url => {
        fetch(url).then(repsonse => response.json())
    })).then(responses => {
        responses.map(response => response.Poster)


    })
    console.log(poster)*/



function createMovieListing(movie) {
    const li = document.createElement('li')
    li.classList.add('movie-listing')
    li.innerHTML = `
            <a href = 'movies.html?movie=${movie.episode_id}'>${movie.title}</a>
            <time>${movie.release_date}</time>
        `
    return li
}
const url = 'https://swapi.dev/api/films'
fetch(url)
    .then(response => {
        return response.json()
    }).then(response => {
        return response.results.map(createMovieListing)
    }).then(movieListings => {
        movieListings.forEach(movieListing => {
            movieListingContainer.append(movieListing)
        })
        movieListings.map(movieListing => {
            return movieListing.episode_id
        })
    })