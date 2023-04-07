//Mobile menu functionality//
const BtnMenuHamburger = document.querySelector(".btn-menu-hamburger")
const BtnMenuClose = document.querySelector(".btn-menu-close");
const NavItemsBox = document.querySelector(".nav-items-box");

BtnMenuHamburger.addEventListener('click', e=> {
    NavItemsBox.setAttribute('data-nav-mobile', 'active');
});

BtnMenuClose.addEventListener('click', e=> {
    NavItemsBox.removeAttribute('data-nav-mobile', 'active');
} ); 



//Mobile menu closes when changing to desktop size//
// const mediaQueryMobileOff = window.matchMedia('(max-width: 78.5em)');

// function navMenuChange(mediaQueryMobileOff) {
//     if (mediaQueryMobileOff.matches) {
//         return;
//     } else {
//         NavItemsBox.removeAttribute('data-nav-mobile', 'active');
//     }
// }

// navMenuChange(mediaQueryMobileOff);

// mediaQueryMobileOff.addEventListener('change', navMenuChange);



//Intersection Observer - navigation changes on scroll//

const NavDataPoint = document.querySelector("data-nav");
const H1DataPoint = document.querySelector("[data-h1]");
const NavBackground = document.querySelector(".nav-background")

const navObserverOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-15% 0% 0% 0%",
}

const navObserver = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            NavBackground.setAttribute('data-nav-blur', 'active')
        } else {
            NavBackground.removeAttribute('data-nav-blur', 'active')
        }
    })
}, navObserverOptions);

navObserver.observe(H1DataPoint);
//unobserve to do (?)//