// Using $(window).width to make sure navigation is not hidden on click when screen width is 768 or higher
if ( $(window).width() < 767) {      
    $('.skip').click(function() {
        $('.navTopItem').toggle();
    });
    $('.navTopItem').click(function(){
        $('.navTopItem').toggle();
    });
    $(document).click(function(event) { 
        if(!$(event.target).closest('.skip').length) {
            if($('.navTopItem').is(":visible")) {
                $('.navTopItem').hide();
            }
        }
    });
}
