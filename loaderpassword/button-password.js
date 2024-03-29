$(".hero-btn").click(function () {
  if (!$(".hero-btn").parent().hasClass("active")) {
    $(this).parent().stop().addClass("active");
    setTimeout(function () {
      $(".hero-btn").parent().removeClass("active");
    }, 2000);
  }
});

$(".hero-btn .btn").click(function () {
    // Check if the input field contains the specific word
    var userInput = $("#name").val().trim().toLowerCase(); // Using #name to target the input field
    var specificWord = "lovlove you"; // Replace "yourword" with the specific word

    if (userInput === specificWord) {
        // Fade out the content of the first page
        $('#first-page-content').fadeOut(1000, function() {
            // Gradually change the background color to white
            setTimeout(function() {
                $('body').css('background-color', '#fbeffb');
                // After background color transition completes, redirect to the second page
                setTimeout(function() {
                    window.location.href = '../fixedindex/fixedindex.html';
                }, 1000);
            }, 500); // Delay changing the background color by 500ms
        });
    } else {
        // If the input does not match the specific word, provide feedback to the user
        alert("Please enter the correct word.");
    }
});
