
// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
   navLinks.style.left = "0";
   navLinks.style.width = "90%"

}
menuCloseBtn.onclick = function () {
   navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
   navLinks.classList.toggle("show1");
}




let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
   navLinks.classList.toggle("show2");
}


// let moreArrow2 = document.querySelector(".more-arrow2");


let moreArrow2 = document.querySelector('.more-arrow2')
moreArrow2.onclick = function () {
      navLinks.classList.toggle("show4");

}

// moreArrow.onclick = function () {
//    navLinks.classList.toggle("show4");
// }


// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function () {
//    navLinks.classList.toggle("show3");
// }

