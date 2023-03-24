// mobile menu toggle
const primaryNav = document.querySelector('.primary-nav__list');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    const isOpened = menuToggle.getAttribute('aria-expanded') ==="true";
    if (isOpened ? closeMenu() : openMenu());
});

function openMenu() {
    menuToggle.setAttribute('aria-expanded', "true");
    primaryNav.setAttribute('data-state', "opened")
}

function closeMenu() {
    menuToggle.setAttribute('aria-expanded', "false");
    primaryNav.setAttribute('data-state', "closing")

    primaryNav.addEventListener('animationend', () => {
        primaryNav.setAttribute('data-state', "closed")
    }, {once: true});
}