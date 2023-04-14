// Mobile menu functionality //
const BtnMenuHamburger = document.querySelector(".btn-menu-hamburger")
const BtnMenuClose = document.querySelector(".btn-menu-close");
const NavItemsBox = document.querySelector(".nav-items-box");
const CheckActive = NavItemsBox.getAttribute("data-nav-mobile");

BtnMenuHamburger.addEventListener('click', e=> {    
    if (CheckActive === "closed") {
        NavItemsBox.setAttribute('data-nav-mobile', 'active');
    } else return
})

BtnMenuClose.addEventListener('click', e=> {    
    NavItemsBox.setAttribute('data-nav-mobile', 'closed');
})



// Mobile menu closes when changing to desktop size //
const mediaQueryMobileOff = window.matchMedia('(max-width: 78.5em)');

function navMenuChange(mediaQueryMobileOff) {
    if (mediaQueryMobileOff.matches) {
        return;
    } else {
        NavItemsBox.setAttribute('data-nav-mobile', 'closed');
    }
}

navMenuChange(mediaQueryMobileOff);

mediaQueryMobileOff.addEventListener('change', navMenuChange);



// Media query JS for mobile nav transition popup prevent, timeout added for Firefox //

const mediaQueryNavWidth = window.matchMedia('(min-width: 78.5em)');

function transitionToggle(mediaQueryNavWidth) {
    if (mediaQueryNavWidth.matches){
        clearQuickTimer()
        NavItemsBox.setAttribute('data-nav-itembox-transition', 'off');
    } else {
        quickTimerSetAttribute();   
    }
}

function quickTimerSetAttribute() {
    setTimeout( e=> {        
        NavItemsBox.setAttribute('data-nav-itembox-transition', 'active');
    }, 0 ); 
}

function clearQuickTimer() {
    clearTimeout(setTimeout);  
}

transitionToggle(mediaQueryNavWidth);

mediaQueryNavWidth.addEventListener('change', transitionToggle);



// Intersection Observer - navigation changes on scroll //

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