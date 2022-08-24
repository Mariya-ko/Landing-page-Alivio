const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button_icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
     mobileNav.classList.toggle('active');
})