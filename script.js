const searchButton = document.getElementById('searchBtn');
const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');
const API_KEY = 'TU_API_KEY'; // Reemplaza con tu API Key de TMDb

searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    displayResults(data.results);
});

function displayResults(movies) {
    resultsDiv.innerHTML = '';
    if (movies.length === 0) {
        resultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
        `;
        resultsDiv.appendChild(movieDiv);
    });
}
