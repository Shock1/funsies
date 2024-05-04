// Check if the user is authenticated
console.log("authenticated");
var authenticated = sessionStorage.getItem("authenticated");
// Log the value of the authenticated variable
if (!authenticated || authenticated !== "true") {
    // If not authenticated, redirect to the landing page
    window.location.href = "../index.html";
    console.log("not authenticated");
}

// Array containing the paths to your HTML pages
var pages = [
    "thoughts/drowning.html",
    "thoughts/foreverchapter.html",
    "thoughts/heavenly.html",
    "thoughts/livefor.html",
    "thoughts/shoulders.html",
    "thoughts/imissyou.html",
    "thoughts/specialtome.html",
    "thoughts/amongstthose.html",
    "thoughts/worthit.html"
    // Add more pages as needed
];

// Function to randomly select a page and redirect to it
function redirectToRandomPage() {
    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];
    window.location.href = randomPage;
}

// Function to check sessionStorage for music playing flag and start playback if true
function checkBackgroundMusic() {
    var musicPlaying = sessionStorage.getItem('musicPlaying');
    if (musicPlaying === 'true') {
        playBackgroundMusic();
    }
}

// Function to play background music
function playBackgroundMusic() {
    var audio = document.getElementById("background-music");
    audio.play();
    sessionStorage.setItem('musicPlaying', 'true'); // Set musicPlaying flag to true
}


// Call the function to check background music when the page loads
window.onload = function() {
    checkBackgroundMusic();
    redirectToRandomPage();
}