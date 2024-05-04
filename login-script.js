$(".hero-btn").click(function () {
    // Check if the input field contains the specific word
    var userInput = $("#name").val().trim().toLowerCase(); // Using #name to target the input field
    var specificWords = ["lovlove you", "lovloveyou"]; // Array containing the specific words

    if (specificWords.some(word => userInput.includes(word))) {
    
    if (!$(".hero-btn").parent().hasClass("active")) {
    $(this).parent().stop().addClass("active");
    setTimeout(function () {
      $(".hero-btn").parent().removeClass("active");
    }, 2000);
  }
}
});

$(".hero-btn .btn").click(function () {
    // Check if the input field contains the specific word
    var userInput = $("#name").val().trim().toLowerCase(); // Using #name to target the input field
    var specificWords = ["lovlove you", "lovloveyou"]; // Array containing the specific words

    if (specificWords.some(word => userInput.includes(word))) {

        sessionStorage.setItem("authenticated", "true");
        // Fade out the content of the first page
        $('#first-page-content').fadeOut(1000, function() {
            // Gradually change the background color to white
            setTimeout(function() {
                $('body').css('background-color', '#e9eaf5');
                // After background color transition completes, redirect to the second page
                setTimeout(function() {
                    window.location.href = 'home/index.html';
                }, 1000);
            }, 500); // Delay changing the background color by 500ms
        });
    } else {
        // If the input does not match any of the specific words, provide feedback to the user
        alert("Please enter the correct word.");
    }
});



document.querySelector('.question-mark').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of the link
  
  // Your script logic here
        $('#first-page-content').fadeOut(1000, function() {
            // Gradually change the background color to white
            setTimeout(function() {
                $('body').css('background-color', '#FFE3EC');
                // After background color transition completes, redirect to the second page
                setTimeout(function() {
                    window.location.href = 'mail/mail.html';
                }, 1000);
            }, 500); // Delay changing the background color by 500ms
        });
});