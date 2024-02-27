$(".hero-btn").click(function () {
  if (!$(".hero-btn").parent().hasClass("active")) {
    $(this).parent().stop().addClass("active");
    setTimeout(function () {
      $(".hero-btn").parent().removeClass("active");
    }, 2000);
  }
});


$(".hero-field").click(function () {
    // Check if the input field contains the specific word
    var userInput = $("#inputField").val().trim().toLowerCase();
    var specificWord = "yourword"; // Replace "yourword" with the specific word

    if (userInput === specificWord) {
        // If the input matches the specific word, proceed with the delayed button animation
        if (!$(this).parent().hasClass("active")) {
            $(this).parent().addClass("active");
            setTimeout(function () {
                // Redirect to the next page after the animation completes
                window.location.href = "../index.html";
            }, 2000); // Delay time in milliseconds (2 seconds in this case)
        }
    } else {
        // If the input does not match the specific word, provide feedback to the user
        alert("Please enter the correct word.");
    }
});