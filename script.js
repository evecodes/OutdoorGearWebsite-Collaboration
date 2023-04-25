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


//JS media queries
const mediaQueryDesktop = window.matchMedia('(min-width: 1256px)');
const mediaQueryMedium = window.matchMedia('(min-width: 736px) and (max-width: 1255.99px)');
const mediaQueryMobile = window.matchMedia('(max-width: 735.99px)');


// Mobile menu closes when changing to desktop size //
function navMenuChange(mediaQueryDesktop) {
    if (mediaQueryDesktop.matches) {
        NavItemsBox.setAttribute('data-nav-mobile', 'closed');        
    } else {        
        return;
    }
}

navMenuChange(mediaQueryDesktop);
mediaQueryDesktop.addEventListener('change', navMenuChange);


// Media query JS for mobile nav transition popup prevent, timeout added for Firefox //
function transitionToggle(mediaQueryDesktop) {
    if (mediaQueryDesktop.matches){
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

transitionToggle(mediaQueryDesktop);
mediaQueryDesktop.addEventListener('change', transitionToggle);



// Product carousel js using js media queries//
const productBox = document.querySelector(".product-box");
const gridProductCarousel = document.querySelector(".grid-product-carousel");

let singleProducts = gridProductCarousel.querySelectorAll('.grid-product').length;
let slideOffset = 0;

const buttonArrowPrevious = document.querySelector(".carousel-arrow-previous");
const buttonArrowNext = document.querySelector(".carousel-arrow-next");

const dotBtn1 = document.querySelector('.dot-one');
const dotBtn2 = document.querySelector('.dot-two');
const dotBtn3 = document.querySelector('.dot-three');
const dotBtn4 = document.querySelector('.dot-four');
const dotBtn5 = document.querySelector('.dot-five');
const dotBtn6 = document.querySelector('.dot-six');

const moveSlides = offsetCheck => {
    const imageWidth =
    productBox.querySelector("ul").offsetWidth;
    gridProductCarousel.style.transform = `translateX(-${
        offsetCheck * imageWidth
    }px)`;            
};

//JS for carousel arrow buttons//
function previousSlide() {
    if (slideOffset >= 1) {
        slideOffset = slideOffset - 1;
    } else {
        slideOffset = singleProducts - 1;
    }    
    moveSlides(slideOffset);
    checkDots();
    console.log('lamp')
    console.log(slideOffset)  
}

function nextSlide() {    
    if (slideOffset < singleProducts - 1) {
        slideOffset = slideOffset + 1
    } else {
        slideOffset = 0;        
    }    
    moveSlides(slideOffset);
    checkDots();
    console.log('flower')
    console.log(slideOffset)    
}

buttonArrowPrevious.addEventListener('click', previousSlide);
buttonArrowNext.addEventListener('click', nextSlide);

//JS for carousel dot buttons//
function checkDots(){
    if (slideOffset === 0) {        
        dotBtn1.setAttribute('data-active', 'on');
    } else {
        dotBtn1.setAttribute('data-active', 'off');
    }
    
    if (slideOffset === 1) {
        dotBtn2.setAttribute('data-active', 'on');
    } else {
        dotBtn2.setAttribute('data-active', 'off');
    }
    
    if (slideOffset === 2) {
        dotBtn3.setAttribute('data-active', 'on');
    } else {
        dotBtn3.setAttribute('data-active', 'off');
    }

    if (slideOffset === 3) {
        dotBtn4.setAttribute('data-active', 'on');
    } else {
        dotBtn4.setAttribute('data-active', 'off');
    }

    if (slideOffset === 4) {
        dotBtn5.setAttribute('data-active', 'on');
    } else {
        dotBtn5.setAttribute('data-active', 'off');
    }

    if (slideOffset === 5) {
        dotBtn6.setAttribute('data-active', 'on');
    } else {
        dotBtn6.setAttribute('data-active', 'off');
    }
};

dotBtn1.addEventListener('click', e=> {    
    moveSlides(slideOffset = 0);
    checkDots();
});

dotBtn2.addEventListener('click', e=> {    
    moveSlides(slideOffset = 1);
    checkDots();
});

dotBtn3.addEventListener('click', e=> {    
    moveSlides(slideOffset = 2);
    checkDots();    
});

dotBtn4.addEventListener('click', e=>{
    moveSlides(slideOffset = 3);
    checkDots(); 
});

dotBtn5.addEventListener('click', e=>{
    moveSlides(slideOffset = 4);
    checkDots(); 
});

dotBtn6.addEventListener('click', e=>{
    moveSlides(slideOffset = 5);
    checkDots(); 
});

//Reset carousel to first slide on resize//
function slideListen() {
    slideOffset = 0
    moveSlides(slideOffset)
    checkDots();           
}

window.addEventListener('resize', slideListen);

//MQ carousel desktop//
function carouselDesktop(mediaQueryDesktop) {
    if (mediaQueryDesktop.matches) {
        singleProducts = 3
        console.log(singleProducts);        
        console.log('desktop on');        
    } else {        
        console.log('desktop off')
        console.log(singleProducts);        
        return;
    }
}

carouselDesktop(mediaQueryDesktop);
mediaQueryDesktop.addEventListener('change', carouselDesktop);

//MQ carousel medium//
function carouselMedium(mediaQueryMedium) {
    if (mediaQueryMedium.matches) {
        console.log('medium on')
        singleProducts = 4
        console.log(singleProducts);       
        
    } else {        
        console.log(singleProducts);        
        console.log('medium off'); 
        return;
    }
}

carouselDesktop(mediaQueryMedium);
mediaQueryMedium.addEventListener('change', carouselMedium);

//MQ carousel mobile//
function carouselMobile(mediaQueryMobile) {
    if (mediaQueryMobile.matches) {
        singleProducts = 6
        console.log('mobile on')
        console.log(singleProducts);
    } else {        
        console.log(singleProducts);        
        console.log('mobile off'); 
        return;
    }
}

carouselMobile(mediaQueryMobile);
mediaQueryMobile.addEventListener('change', carouselMobile);


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