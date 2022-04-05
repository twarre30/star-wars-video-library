const starWarsIds = {
    4: 1,
    5: 2,
    6: 3,
    1: 4,
    2: 5,
    3: 6,
}
const div = document.querySelector('div')
const movieImages = [{
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


function createMovieListing(movie) {
    div.innerHTML = `
        <a href = 'movies.html?movie=${movie.episode_id}'>${movie.title}</a>
        <img src='${movieImages.find(image => image.id === movie.episode_id).url}' alt='${movie.title}'/>
        <time>${movie.release_date}</time>
        <p>${movie.opening_crawl}</p>

        <h2>Characters</h2>
    `
}

function createCharacterListing(movie) {
    const ul = document.createElement('ul')
    ul.classList.add('.characters')
    div.append(ul)
    Promise.all(movie.characters
        .map(url => fetch(url)
            .then(response => response.json())))
        .then(responses => responses.forEach(response => {
            const li = document.createElement('li')
            li.textContent = `${response.name}`
            ul.append(li)
        }))
}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch(`https://swapi.dev/api/films/${starWarsIds[queryString.get('movie')]}`)
    .then(response => response.json())
    .then(movie => {
        createMovieListing(movie)
        createCharacterListing(movie)
        console.log(movie)
    })