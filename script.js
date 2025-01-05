const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    const isMenuVisible = mobileMenu.style.display === 'block';
    mobileMenu.style.display = isMenuVisible ? 'none' : 'block';
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toTopButton = document.getElementById('toTop');

    // Показати/сховати кнопку при прокручуванні
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });

    // Прокручування сторінки догори при натисканні на кнопку
    toTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Плавне прокручування
        });
    });
});
