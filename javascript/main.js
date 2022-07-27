// Show & Hide Desktop Menu

const btnActive = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');


btnActive.addEventListener('click' , toogleMenuDesktop);

function toogleMenuDesktop (){

    desktopMenu.classList.toggle('inactive');

}

// Show & Hide Mobile Menu

const burgerBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


burgerBtn.addEventListener('click' , toogleMobileMenu);

function toogleMobileMenu (){

    mobileMenu.classList.toggle('inactive');

}