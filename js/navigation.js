// Mobile Navigation
var nav = document.querySelectorAll("nav ul .navTopItem"),
    navToggle = document.querySelector("nav .skip");
if (navToggle) {
  navToggle.addEventListener("click",
  function(e) {
  if (nav.className == "navTopItem open") {
    nav.removeClass = "open";
  } else {
    nav.addClass = "open";
  }
  e.preventDefault();
  }, false);
}

/* Any click outside of the nav element will close the menu if it's open */
var specifiedElement = document.querySelector('nav');
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);
  if (!isClickInside && nav.className == "navTopItem open") {
    nav.className = "navTopItem";
  }
});

// $('.hamburger').on('click', function () {
//   $('.menu').addClass('open');
// });

// $( '.menu a' ).on("click", function(){
//   $('.menu').removeClass('open');
// });