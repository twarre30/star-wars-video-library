const movieListing = document.querySelector('.movieListing')

function addMovieListing(response) {
    const li = documemt.createElement('li')
    li.classList.add('movie-listing')
    li.innerHTML = `
        <a href = "movies.html?movie=${reponse.episode_id}">${response.title}</a>
        <time>${04/05/2022}</time>
    `
    movieListing.append(li)
}






const url = 'https://swapi.dev/api/films'
fetch(url) 
    .then(response => {
        return response.json()
    }).then(response => {
        return response.results.map(result => {
            return result
    })
    }).then(responses => {
        responses.forEach(response => {
            addMovieListing(response)
        })
    })
    
