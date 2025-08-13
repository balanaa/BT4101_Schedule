const audio = new Audio('Sounds/thud.mp3');

document.querySelectorAll('.sideButtons').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        audio.play();
        //audio.volume = 0.1;

        setTimeout(() => { window.location.href = link.href; }, 800);
    });
});
