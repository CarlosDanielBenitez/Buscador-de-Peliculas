const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');
const API_KEY = 'd06dddbf562c97eff491aacc46ce43d8'; // Reemplaza con tu API Key de TMDb

// Función para buscar películas
async function searchMovies(query) {
    if (!query) {
        resultsDiv.innerHTML = ''; // Limpiar resultados si no hay consulta
        return;
    }

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    displayResults(data.results);
}

// Función para mostrar los resultados
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

// Agregar el evento input para buscar en tiempo real
searchInput.addEventListener('input', (event) => {
    const query = event.target.value;
    searchMovies(query);
});
