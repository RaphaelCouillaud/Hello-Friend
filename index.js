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
  $.fillStyle = "rgba(0,0,0,.05)";
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


// TYPE SCRIPT //


let text = "BIENVENUE SUR MON PORTFOLIO";
    let array = Array.from(text);

    Object.keys(array).map((key) => {
      setTimeout(
        () => (document.getElementById("headerdescription").innerHTML += array[key]),
        key * 210
      );
    });



// NAV TOP SCROLL //
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


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
  displaySlide(navigation, "nav-current");
}

function prevSlide() {
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else {
    slidePos--;
  }
  displaySlide(slides, "carousel-item-visible");
  displaySlide(navigation, "nav-current");
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


// REFRESH //
const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)




// FONTS CSS EFFECTS SECTION FOR //
window.addEventListener("scroll" ,() => {
  let content = document.querySelector('.wishsection');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight /1;
  if (contentPosition < screenPosition) {
    content.classList.add('animate');
  } else {
    content.classList.remove('animate');
  }
});


/*var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function() {
    doStuff();
};*/




// SCROLL TO TOP //


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



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
