const movieListingContainer = document.querySelector('.movieListing')

function createMovieListing(movie) {
    const li = document.createElement('li')
    li.classList.add('movie-listing')
    li.innerHTML = `
        <a href = "movies.html?movie=${movie.title}">${movie.title}</a>
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
    })