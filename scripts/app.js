const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(50, 50, 80, 0.658), rgba(74, 50, 50, 0.575)),
    url('${imageUrlInStorage}')`;
    movieYearToDisplay.textContent = yearInStorage;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(50, 50, 80, 0.658), rgba(74, 50, 50, 0.575)),
    url('${posterUrlInput}')`;
    movieYearToDisplay.textContent = movieYearInput;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';
});