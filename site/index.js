const movieListingContainer = document.querySelector('.movieListing')
// const imdbIDs = [
//     {4: 'tt0076759'},
//     {5: 'tt0080684'},
//     {6: 'tt0086190'},
//     {1: 'tt0120915'},
//     {2: 'tt0121765'},
//     {3: 'tt0121766'},
// ]
// const poster = fetch(`http://www.omdbapi.com/?apikey=58f2f297&i=${imdbIDs[4]}`)
//     .then(response => response.json())
//     .then(parsedResponse => {
//         return parsedResponse.Poster
//     })

// console.log(poster)



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
