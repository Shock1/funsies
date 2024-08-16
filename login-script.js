$(document).on('click', '.hero-btn', function () {
    var userInput = $("#name").val().trim().toLowerCase();
    var specificWords = ["lovlove you", "lovloveyou"];

    if (specificWords.some(word => userInput.includes(word))) {
        if (!$(this).parent().hasClass("active")) {
            $(this).parent().stop().addClass("active");
            setTimeout(() => {
                $(".hero-btn").parent().removeClass("active");
            }, 2000);
        }
    }
});

$(".hero-btn .btn").click(function () {
    var userInput = $("#name").val().trim().toLowerCase();
    var specificWords = ["lovlove you", "lovloveyou"];

    if (specificWords.some(word => userInput.includes(word))) {
        sessionStorage.setItem("authenticated", "true");
        fadeOutContentAndRedirect('home/index.html', '#e9eaf5');
    } else {
        alert("Please enter the correct word.");
    }
});

$('.question-mark, .tracker-mark, .constitution-mark').click(function () {
    var bgColor = $(this).hasClass('question-mark') ? '#FFE3EC' : 
                  $(this).hasClass('tracker-mark') ? '#57008a' : 
                  '#272824';
    var page = $(this).hasClass('question-mark') ? 'mail/mail.html' : 
               $(this).hasClass('tracker-mark') ? 'tracker/index.html' : 
               'constitution/index.html';
    fadeOutContentAndRedirect(page, bgColor);
});



// $('.question-mark, .tracker-mark').click(function () {
//     var bgColor = $(this).hasClass('question-mark') ? '#FFE3EC' : '#57008a';
//     var page = $(this).hasClass('question-mark') ? 'mail/mail.html' : 'tracker/index.html';
//     fadeOutContentAndRedirect(page, bgColor);
// });

function fadeOutContentAndRedirect(page, bgColor) {
    $('#first-page-content').fadeOut(1000, function () {
        setTimeout(function () {
            $('body').css('background-color', bgColor);
            setTimeout(function () {
                window.location.href = page;
            }, 1000);
        }, 500);
    });
}
