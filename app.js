$('.nav-link').on('click', function(e) {
    e.preventDefault()
    console.log('and were moving to ', $(this).attr('href'))
    $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        250,
        'linear'
    )
})

// function for floating menu
var windowHeight = $(window).height();
var titleMenuXPos = $("#title-menu").position()

function slider() {
    // console.log('were in slider now', windowHeight, $(window).scrollTop())
    if ($(window).scrollTop() > titleMenuXPos.top) //Show the slider after scrolling down 100px
    {
        $('#floating-nav').show();
        // console.log('show')
    } else {
        $('#floating-nav').hide();
        // console.log('hide')
    }

}
$(window).scroll(function() {
    windowHeight = $(window).height();
    slider();
});
$(document).ready(function() {
    windowHeight = $(window).height();
    slider();
});