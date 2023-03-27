


//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-menu').toggleClass('active');
    })
})(jQuery);


//menu toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    })
})(jQuery);