const audio = new Audio('Sounds/thud_bloody.mp3');

document.querySelectorAll('.sideButtons').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        audio.play();

        setTimeout(() => { window.location.href = link.href; }, 600);
    });
});
