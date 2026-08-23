const buttons = document.querySelectorAll('.js-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        buttons.forEach((otherButton) => {
            otherButton.classList.remove('is-toggled');
        });

        button.classList.add('is-toggled');

    });
});