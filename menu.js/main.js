import { toggleMenu, closeMenuOnOutsideClick } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleMenu(menuToggle, mobileMenu);
    closeMenuOnOutsideClick(menuToggle, mobileMenu);
});
