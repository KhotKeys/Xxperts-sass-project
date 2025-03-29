document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
