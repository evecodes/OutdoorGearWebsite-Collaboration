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

const mediaQueryMobileOff = window.matchMedia('(max-width: 78.5em)');
const mediaQueryMedium = window.matchMedia('(max-width: 46em)');
const mediaQueryMobile = window.matchMedia('(max-width: 27em)');
const testQuery = window.matchMedia('(min-width: 400px) and (max-width: 1000px)');
const mediaQueryNavWidth = window.matchMedia('(min-width: 78.5em)');

const bodystuff = document.querySelector('header');


//----- Works---- test min max query
// function testTest(testQuery) {
//     if (testQuery.matches) {
//         bodystuff.setAttribute('data-alive', 'alive');
//     } else {
//         bodystuff.setAttribute('data-alive', 'nope');
//         console.log('look here')
//     }
// }

// testTest(testQuery);

// testQuery.addEventListener('change', testTest);


// Mobile menu closes when changing to desktop size //

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



// Product carousel js using js media queries

//notes
//Code split in/out media queries
//media queries in PX ipv EM


const productBox = document.querySelector(".product-box");
const gridProductCarousel = document.querySelector(".grid-product-carousel");

const singleProducts = gridProductCarousel.querySelectorAll('.grid-product').length / 4;
// ^^^^ updating this const to a let  ^^^^^ //
let slideOffset = 0;

const buttonArrowPrevious = document.querySelector(".carousel-arrow-left");
const buttonArrowNext = document.querySelector(".carousel-arrow-right");
// ^^^ fix html/css names ^^^^ //

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

// const controller = new AbortController()


function carouselDesktop(mediaQueryMobileOff) {
    if (mediaQueryMobileOff.matches) {
        console.log('desktop off')
        // controller.abort()
        return;
    } else {      

        // const/let single products here//
        console.log('desktop on');  

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
            console.log('cake')
        });

        // ^^^^^ outside MQ, no doubling event listener //
        

        function slideListen() {
            slideOffset = 0
            moveSlides(slideOffset)
            checkDots();   
            console.log('peanut')         
        }

        window.addEventListener('resize', slideListen);
        // ^^^ outside MQ? //
    }
}

carouselDesktop(mediaQueryMobileOff);

mediaQueryMobileOff.addEventListener('change', carouselDesktop);



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