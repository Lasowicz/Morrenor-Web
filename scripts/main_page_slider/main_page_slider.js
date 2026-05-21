document.addEventListener('DOMContentLoaded', () => {
    const main_page_slider = [
        'images/title_page/slider/img1.png',
        'images/title_page/slider/img2.png',
        'images/title_page/slider/img3.png',
        'images/title_page/slider/img4.png',
        'images/title_page/slider/img5.png',
        'images/title_page/slider/img6.png'
    ];

const slider = document.getElementById('mainSlider');

if (!slider) {
        console.error('❌ Элемент #mainSlider не найден на странице!');
    return;
}

let currentIndex = 0;

function changeBackground() {
    const nextIndex = (currentIndex + 1) % main_page_slider.length;

    slider.style.transition = 'background-image 1.2s ease-in';
    slider.style.backgroundImage = `url(${main_page_slider[nextIndex]})`;

        currentIndex = nextIndex;
}

changeBackground();

setInterval(changeBackground, 5000);
});

function startSlider() {
    interval = setInterval(changeBackground, 5000);
}

slider.addEventListener('mouseenter', () => clearInterval(interval));
slider.addEventListener('mouseleave', startSlider);

startSlider();