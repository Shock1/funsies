document.querySelector('.return').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of the link
  
  // Your script logic here
        $('#first-page-content').fadeOut(1000, function() {
            // Gradually change the background color to white
            setTimeout(function() {
                $('body').css('background-color', '#af2829');
                // After background color transition completes, redirect to the second page
                setTimeout(function() {
                    window.location.href = '../index.html';
                }, 1000);
            }, 500); // Delay changing the background color by 500ms
        });
});