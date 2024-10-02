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

document.addEventListener('DOMContentLoaded', function() {
    const sobreMiSection = document.getElementById('sobre-mi');
    const sobreMiImage = document.getElementById('sobre-mi-image');

    function checkVisibility() {
        const rect = sobreMiSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Comprova si la secció "Sobre Mi" és visible
        if (rect.top < windowHeight && rect.bottom > 0) {
            // Si és visible, mostrem la imatge
            sobreMiImage.style.opacity = '1'; // Fins ara, podries tenir un estil ocult
            sobreMiImage.style.visibility = 'visible'; // Ara es pot veure
        } else {
            // Si no és visible, amaguem la imatge
            sobreMiImage.style.opacity = '0'; // Es desdibuixa
            setTimeout(() => {
                sobreMiImage.style.visibility = 'hidden'; // Amaga després de la transició
            }, 500); // Assegura't que coincideixi amb la durada de la transició
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Comprovem la visibilitat al carregar la pàgina
});

document.addEventListener('DOMContentLoaded', function() {
    const webText = document.querySelector('.web-text');
    const ciberseguretatText = document.querySelector('.ciberseguretat-text');
    const baseDadesText = document.querySelector('.base-dades-text');
    const sobreMiImage = document.getElementById('sobre-mi-image');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        // Comprova si el text de Web és visible
        const webRect = webText.getBoundingClientRect();
        if (webRect.top < windowHeight && webRect.bottom > 0) {
            webText.classList.add('visible'); // Afegim la classe per mostrar
        } else {
            webText.classList.remove('visible'); // Elimina la classe quan no és visible
        }

        // Comprova si el text de Ciberseguretat és visible
        const ciberseguretatRect = ciberseguretatText.getBoundingClientRect();
        if (ciberseguretatRect.top < windowHeight && ciberseguretatRect.bottom > 0) {
            ciberseguretatText.classList.add('visible'); // Afegim la classe per mostrar
        } else {
            ciberseguretatText.classList.remove('visible'); // Elimina la classe quan no és visible
        }

        // Comprova si el text de Base de Dades és visible
        const baseDadesRect = baseDadesText.getBoundingClientRect();
        if (baseDadesRect.top < windowHeight && baseDadesRect.bottom > 0) {
            baseDadesText.classList.add('visible'); // Afegim la classe per mostrar
        } else {
            baseDadesText.classList.remove('visible'); // Elimina la classe quan no és visible
        }

        // Comprova si la imatge de "Sobre mí" és visible
        const sobreMiRect = sobreMiImage.getBoundingClientRect();
        if (sobreMiRect.top < windowHeight && sobreMiRect.bottom > 0) {
            sobreMiImage.style.opacity = '1'; // Fem la imatge visible
            sobreMiImage.style.visibility = 'visible'; // Assegurem que la imatge és visible
        } else {
            sobreMiImage.style.opacity = '0'; // Fem la imatge invisible
            sobreMiImage.style.visibility = 'hidden'; // Assegurem que la imatge no és visible
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Comprovem la visibilitat al carregar la pàgina
});