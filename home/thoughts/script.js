// Check if the user is authenticated
console.log("authenticated");
var authenticated = sessionStorage.getItem("authenticated");
// Log the value of the authenticated variable
if (!authenticated || authenticated !== "true") {
// If not authenticated, redirect to the landing page
  window.location.href = "../../login.html";
  console.log("not authenticated");
  }

// Function to play background music
function playBackgroundMusic() {
    var audio = document.getElementById("background-music");
    audio.play();
    sessionStorage.setItem('musicPlaying', 'true'); // Set musicPlaying flag to true
    console.log('MusicSetTrue');
}


// Call the function to check background music when the page loads
window.onload = function() {
    playBackgroundMusic();
};