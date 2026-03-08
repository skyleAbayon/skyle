function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

// close menu when a link is clicked (mobile)
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.querySelector('.menu');
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
            }
        });
    });
});