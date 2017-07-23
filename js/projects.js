$('.projectContainer').hover(
  function() {
    $(this).children('a').fadeTo(0.25, 0.25);
    $(this).children('figcaption').css("display", "block");
  },
  function() {
    $(this).children('a').fadeTo(0.25, 1);
    $(this).children('figcaption').css("display", "none");
  }
);