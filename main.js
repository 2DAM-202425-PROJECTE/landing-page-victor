import Alpine from 'alpinejs';
window.Alpine = Alpine;

Alpine.start();
let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')
function showNext() {


    currentIndex++;
    if (currentIndex>carousel.children.length -1){
        currentIndex=0
    }
    carousel.style.transform = translateX('-${currentIndex * 100}%');
}

function showPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carousel.children.length - 1
    }
    carousel.style.transform = translateX('-${currentIndex * 100}%');
}
nextBtn.addEventListener('click', showNext)
prevBtn.addEventListener('click', showPrev)