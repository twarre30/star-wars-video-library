const starWarsIds = {
    4: 1,
    5: 2,
    6: 3,
    1: 4,
    2: 5,
    3: 6,
}
const div = document.querySelector('div')


function createMovieListing(movie) {
    div.innerHTML = `
        <a href = 'movies.html?movie=${movie.episode_id}'>${movie.title}</a>
        <time>${movie.release_date}</time>

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
    })