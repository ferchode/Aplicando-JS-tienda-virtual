const btnActive = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.inactive');


btnActive.addEventListener('click' , toogleMenuDesktop);

function toogleMenuDesktop (){

    desktopMenu.classList.toggle('inactive');

}
