//Mobile menu functionality//
const BtnMenuHamburger = document.querySelector(".btn-menu-hamburger")
const BtnMenuClose = document.querySelector(".btn-menu-close");
const NavItemsBox = document.querySelector(".nav-items-box");

BtnMenuHamburger.addEventListener('click', e=> {
    NavItemsBox.classList.toggle("display-none-toggle");
});

BtnMenuClose.addEventListener('click', e=> {
    NavItemsBox.classList.toggle("display-none-toggle");
} ); 


//Mobile menu closes when changing to desktop size//
const mediaQueryMobileOff = window.matchMedia('(max-width: 78.5em)');

function navMenuChange(mediaQueryMobileOff) {
    if (mediaQueryMobileOff.matches) {
        return;
    } else {
        NavItemsBox.classList.add("display-none-toggle");   
    }
}

navMenuChange(mediaQueryMobileOff);

mediaQueryMobileOff.addEventListener('change', navMenuChange);