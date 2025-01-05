export const toggleMenu = (menuToggle, mobileMenu) => {
    menuToggle.addEventListener('click', () => {
        const isMenuVisible = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isMenuVisible ? 'none' : 'block';
    });
};

export const closeMenuOnOutsideClick = (menuToggle, mobileMenu) => {
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.style.display = 'none';
        }
    });
};
