const audioClick = new Audio('Audio/click.ogg');
const audioButtonHover  = new Audio('Audio/MagicClick.ogg');
let isActive = false;

audioClick.load();
audioButtonHover.load();

const buttons = document.querySelectorAll('.navigation-menu-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', (e) => {
        audioButtonHover.currentTime = 0;
        audioButtonHover.play().catch((err) => {
            console.error('Отсутствует аудио-файл эффекта наведения мыши на кнопку!',err);
            isActive = true;
        });
    })
    isActive = false;
})

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.tagName === 'A') {
            e.preventDefault();
        }

        audioClick.currentTime = 0;
        audioClick.play()
            .then(() => {
                if (button.tagName === 'A' && button.href) {
            setTimeout(() => {
                window.location.href = button.href;
                  }, 3000);
                }
             })
        .catch((err) => {
        console.log('Отсутствует аудио-файл клика!', err);
        });
    })
})