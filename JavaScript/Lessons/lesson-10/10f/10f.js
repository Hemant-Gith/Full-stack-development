const buttons = document.querySelectorAll('.js-button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.classList.contains('is-toggled')) {
            button.classList.remove('is-toggled');
        } else {
            button.classList.add('is-toggled');
        }

    });
});