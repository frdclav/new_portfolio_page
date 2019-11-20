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


// ///////////////////// adding portfolio items
function portfolioObj(title, image, desc, link) {
    this.title = title
    this.img = image
    this.description = desc
    this.link = link

    // function to display portfolio item
    this.showItem = function() {
        var newDiv = $("<div>");
        newDiv.addClass('card m-3 flex-fill align-self-center');
        newDiv.attr('style', 'width:35vw;')
        var newCardBody = $("<div>");
        newCardBody.addClass('card-body')
        var newImg = $("<img>");
        newImg.addClass('img-fluid');
        newImg.attr('src', this.img);
        newImg.attr('alt', this.title + ' image')
        var newTitle = $("<h5>")
        newTitle.addClass("card-title")
        newTitle.text(this.title)
        var newDesc = $("<p>");
        newDesc.addClass("card-text")
        newDesc.text(this.description)
        var newBtn = $("<a>");
        newBtn.addClass("btn btn-secondary")
        newBtn.attr('href', this.link)
        newBtn.text('Learn More!')

        newDiv.append(newCardBody);
        newDiv.prepend(newImg)
        newCardBody.append(newTitle, newDesc, newBtn)
        $("#portfolio-space").append(newDiv)
    }
}
// create portfolio items

var a = new portfolioObj("Train Schedules", "assets/images/trainTimes.png", "An app that allows user to store train times and learn when the next train arrives. Uses Firebase Real Time DB for data persistence!", "https://github.com/frdclav/TrainSchedule")

var b = new portfolioObj("GiphyAPI search interface", "assets/images/giphyAPI2.png", "An app that allows user to search for gifs using the giphy api ", "https://github.com/frdclav/giphyApi")

var c = new portfolioObj("Kpop Trivia with timer", "assets/images/trivia.png", "A simple trivia game app with timer", "https://github.com/frdclav/TriviaGame")

var d = new portfolioObj("Star Wars RPG!", "assets/images/sw_rpg.png", "A simple RPG fighting game. Player chooses a fighter and fights the others to get stronger. Last one standing wins! Coded with bootstrap, javascript and jquery ", "https://github.com/frdclav/unit-4-game")

var e = new portfolioObj("Word Guess Game", "assets/images/kpop_hangman_thumb.png", "A simple word guess game where players guess a letter or the entire word. The theme is K-Pop artists. Check it out on github below! ", "https://github.com/frdclav/word-guess-game")

var listOfPortfolioItems = [a, b, c, d, e]

listOfPortfolioItems.forEach(element => {
    element.showItem();
})