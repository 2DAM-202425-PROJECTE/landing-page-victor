// No és necessari importar Alpine.js aquí si ja ho has fet a l'HTML

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let index = 0;

function showNext() {
    index++;
    if (index > carousel.children.length - 1) {
        index = 0;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`; // Aquí fem servir cometes invertides
}

function showPrev() {
    index--;
    if (index < 0) {
        index = carousel.children.length - 1;
    }
    carousel.style.transform = `translateX(-${index * 100}%)`; // Aquí fem servir cometes invertides
}

// Assegura't que el DOM estigui carregat abans d'afegir els esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);
});