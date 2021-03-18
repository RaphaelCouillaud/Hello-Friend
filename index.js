// CANVAS //

const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = (C.width = window.innerWidth),
  H = (C.height = window.innerHeight);

const str = "HELLO FRIEND مرحبا صديق   Hola amiga שלום חבר  Ciao amico こんにちは友達 Hallo vriend 안녕 친구 Witaj przyjacielu 你好，朋友 Olá amigo Привет salut l'ami" ,
  matrix = str.split("");

let font = 11,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  $.fillStyle = "rgba(0,0,0,.1)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#08c404";
  $.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}

setInterval(draw, 123);

window.addEventListener("resize", () => location.reload());
/////////////////////////////////////////////////////////////////////////


// TYPE SCRIPT //
let text = "BIENVENUE SUR MON PORTFOLIO";
    let array = Array.from(text);

    Object.keys(array).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription").innerHTML += array[key]),
        key * 250
      );
    });
//////////////////////////////////////////////////////////////////////////////    

// NAVBAR RESPONSIVE //
function responsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
///////////////////////////////////////////////////////////////////////////////

// NAV TOP SCROLL //
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myStickyNav()};
// Get the navbar
let navbar = document.getElementById("navbar");
// Get the offset position of the navbar
let sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
///////////////////////////////////////////////////////////////
//SPY SCROLL
document.addEventListener('DOMContentLoaded', function(){ 
  
  // grab the sections (targets) and menu_links (triggers)
  // for menu items to apply active link styles to
  const sections = document.querySelectorAll(".template__section");
  const menu_links = document.querySelectorAll(".template__nav-item a");
  
  // functions to add and remove the active class from links as appropriate
  const makeActive = (link) => menu_links[link].classList.add("detected");
  const removeActive = (link) => menu_links[link].classList.remove("detected");
  const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  
  // change the active link a bit above the actual section
  // this way it will change as you're approaching the section rather
  // than waiting until the section has passed the top of the screen
  const sectionMargin = 100;
  
  // keep track of the currently active link
  // use this so as not to change the active link over and over
  // as the user scrolls but rather only change when it becomes
  // necessary because the user is in a new section of the page
  let currentActive = 0;

  // listen for scroll events
  window.addEventListener("scroll", () => {
    
    // check in reverse order so we find the last section
    // that's present - checking in non-reverse order would
    // report true for all sections up to and including
    // the section currently in view
    //
    // Data in play:
    // window.scrollY    - is the current vertical position of the window
    // sections          - is a list of the dom nodes of the sections of the page
    //                     [...sections] turns this into an array so we can
    //                     use array options like reverse() and findIndex()
    // section.offsetTop - is the vertical offset of the section from the top of the page
    // 
    // basically this lets us compare each section (by offsetTop) against the
    // viewport's current position (by window.scrollY) to figure out what section
    // the user is currently viewing
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin )

    // only if the section has changed
    // remove active class from all menu links
    // and then apply it to the link for the current section
    if (current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
}, false);

////////////////////////////////////////////////////////////////////////////
//INTERSECTION OBSERVER//
const ratio = 0.1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
	entries.forEach(function (entry) {
		if (entry.intersectionRatio > ratio) {
			entry.target.classList.add('reveal-visible')
			observer.unobserve(entry.target)			
		}
		})
}
const observerIntersect = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (revealTitle) {
	observerIntersect.observe(revealTitle)
})
///////////////////////////////////////////////////////////////

//  LIST //
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
var items = document.querySelectorAll(".todocontainer li");
// code for the isElementInViewport function
 
function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
/////////////////////////////////////////////////////////////////////////////////////

// FONTS CSS EFFECTS SECTION FOR //
window.addEventListener("scroll" ,() => {
  let content = document.querySelector('#wishsection');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight /1;
  if (contentPosition < screenPosition) {
    content.classList.add('animate');
  } else {
    content.classList.remove('animate');
  }
});
////////////////////////////////////////////////////////////////////////////////////

// SLIDER ARCADE //
const prevButton = document.getElementById("carousel-button-prev");
const nextButton = document.getElementById("carousel-button-next");
//const slideNav = document.getElementById("carousel-slide-nav");//
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;
let slidePos = 0;
//let navigation = slideNav.childNodes;//

//slideNavigation();

function displaySlide(element, className) {
  for (let item = 0; item < totalSlides; item++) {
    item === slidePos
      ? element[item].classList.add(className)
      : element[item].classList.remove(className);
  }
}

function nextSlide() {
  if (slidePos === totalSlides - 1) {
    slidePos = 0;
  } else {
    slidePos++;
  }
  displaySlide(slides, "carousel-item-visible");
  //displaySlide(navigation, "nav-current");//
}

function prevSlide() {
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else {
    slidePos--;
  }
  displaySlide(slides, "carousel-item-visible");
  //displaySlide(navigation, "nav-current");//
}

/*function slideNavigation() {
  for (let slide = 0; slide < totalSlides; slide++) {
    let span = document.createElement("span");
    if (slide === slidePos) {
      span.classList.add("nav-current");
    }
    slideNav.append(span);
    span.addEventListener("click", function () {
      slidePos = slide;
      displaySlide(slides, "carousel-item-visible");
      displaySlide(navigation, "nav-current");
    });
  }
}*/

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 7500);
//////////////////////////////////////////////////////////////////////////////////////



// REFRESH //
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)

///////////////////////////////////////////////////////////////////////////////////////





// SCROLL TO TOP //
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
//////////////////////////////////////////////////////////////////////////////////////


// PROJECTS LIST //
const allBlocs = document.querySelectorAll('.listeprojets');


allBlocs.forEach(listeprojets => {
    listeprojets.addEventListener('click', (e) => {
        // console.log(e.target);
        e.target.classList.add('active');

        for(let i = 0; i < allBlocs.length; i++ ){
            if(allBlocs[i] !== e.target){
                allBlocs[i].classList.remove('active');
            }
        }  
    })
})

const buttons = document.querySelectorAll('a');

buttons.forEach(a => {
    a.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})
const vid = document.querySelectorAll('video');

vid.forEach(video => {
    video.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})
////////////////////////////////////////////////////////////////////////////////

// MOUSE IMG SCROLL //
jQuery(function($){$('.imagehover').mousemove(function(e){
  $(this).find('img').addClass('scrollable');
   $(this).addClass('scrollable');
  $(this).find('img').css({
      left:e.pageX, top:e.pageY
    });
}).mouseleave(function(){
  
  $(this).removeClass('scrollable');
   $(this).find('p').removeClass('scrollable');
  $(this).find('img').removeClass('scrollable');
});
})