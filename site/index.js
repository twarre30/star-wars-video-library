const movieListingContainer = document.querySelector('.movieListing')
    /*const imdbIDs = [{
            id: 4,
            url: 'http://www.omdbapi.com/?apikey=58f2f297&i=tt0076759'
        },

        {
            id: 5,
            url: 'http://www.omdbapi.com/?apikey=58f2f297&i=tt0080684'
        },
        {
            id: 6,
            url: 'http://www.omdbapi.com/?apikey=58f2f297&i=tt0086190'
        },
        {
            id: 1,
            url: 'http://www.omdbapi.com/?apikey=58f2f297&i=tt0120915'
        },
        {
            id: 2,
            url: 'http://www.omdbapi.com/?apikey=58f2f297&i=tt0121765'
        },
        {
            id: 3,
            url: 'http://www.omdbapi.com/?apikey=58f2f297&i=tt0121766'
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