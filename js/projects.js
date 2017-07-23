$('.projectAnchor').hover(
    function() {
        $(this).fadeTo(0.25, 0.25);
        $(this).siblings('figcaption').css("display","block");
    }, function() {
        $(this).fadeTo(0.25, 1);
        $(this).siblings('figcaption').css("display","none");
    }
);