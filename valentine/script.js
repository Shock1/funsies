// Check if the user is authenticated
console.log("authenticated");
var authenticated = sessionStorage.getItem("authenticated");
// Log the value of the authenticated variable
if (!authenticated || authenticated !== "true") {
// If not authenticated, redirect to the landing page
  window.location.href = "../../index.html";
  console.log("not authenticated");
  }

import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';

const config = {
  theme: 'dark',
  animate: true,
  snap: true,
  start: gsap.utils.random(0, 100, 1),
  end: gsap.utils.random(900, 1000, 1),
  scroll: true,
  debug: false,
};

// Make h1 appear
$(document).ready(function () {
  $("h1.fade-in").fadeIn(2000); // Fade in over 2 seconds
});

// Array of phrases for the "test" text
const phrases = [
  "No",
  "Must be a mistake",
  "It's the green one😏",
  "Wrong button, pumpkin😌",
  "That one doesn't work🧐",
  "It was really for decor🤨",
  "Солнышко, на зеленую🟩",
  "Нет?",
  "Xммммм",
  "Boo, AAH MY HEART😣",
  "I'm feeling faint😖",
  "Call 911",
  "Tell my mom I love her",
  "I can only be saved by pressing the green button😵",
  "Or boobies😮‍💨",
  "😏",
  "🤔",
  "AAH I'm fading away😵",
  "I can see the light",
  "Es lo que es",
  "🪦",
  "👻",
  "I'm a scary ghost now👻",
  "Booooo I'm flying around you🧞‍♂️",
  "I will haunt you unless you press the green button",
  "I will move your furniture around",
  "Wish they would move for different reasons tho😏",
  "I'm a ghost! You gotta save me",
  "Press green to bring me back to life😌", //Final
];

let currentPhraseIndex = -1; // Start with no phrase displayed

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');

  // Initialize GSAP animations (unchanged from original)
  const items = gsap.utils.toArray('ul li');
  if (items.length === 0) {
    console.error("No items found matching the selector 'ul li'");
    return; // Stop execution if no items are found
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

  const dimmer = gsap
    .timeline()
    .to(items.slice(1), { opacity: 1, stagger: 0.5 })
    .to(items.slice(0, items.length - 1), { opacity: 0.2, stagger: 0.5 }, 0);

  ScrollTrigger.create({
    trigger: items[0],
    endTrigger: items[items.length - 1],
    start: 'center center',
    end: 'center center',
    animation: dimmer,
    scrub: 0.2,
  });

  const scroller = gsap.timeline().fromTo(
    document.documentElement,
    { '--hue': config.start },
    { '--hue': config.end, ease: 'none' }
  );

  ScrollTrigger.create({
    trigger: items[0],
    endTrigger: items[items.length - 1],
    start: 'center center',
    end: 'center center',
    animation: scroller,
    scrub: 0.2,
  });

  gsap.fromTo(
    document.documentElement,
    { '--chroma': 0 },
    {
      '--chroma': 0.3,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.2,
        trigger: items[0],
        start: 'center center+=40',
        end: 'center center+-40',
      },
    }
  );

  gsap.fromTo(
    document.documentElement,
    { '--chroma': 0.3 },
    {
      '--chroma': 0,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.2,
        trigger: items[items.length - 2],
        start: 'center center',
        end: 'center center-=40',
      },
    }
  );

  console.log('GSAP animations initialized');

  // Attach button functionality
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');
  const testText = document.querySelector('.test-text');

  if (!yesButton || !noButton || !testText) {
    console.error('Buttons or test-text not found in the DOM');
    return;
  }

  noButton.addEventListener('click', () => {
    console.log('No button clicked');

    // Update the "test" text if we haven't reached the last phrase
    if (currentPhraseIndex < phrases.length - 1) {
      currentPhraseIndex++;
      testText.textContent = phrases[currentPhraseIndex];
      testText.style.display = 'block'; // Ensure the text is visible
    } else {
      console.log('Final phrase reached. Text will not update further.');
    }

    // Adjust the Yes button size (this happens regardless of the text)
    const currentFontSize = parseFloat(
      window.getComputedStyle(yesButton).fontSize
    );
    const currentPadding = parseFloat(
      window.getComputedStyle(yesButton).padding
    );

    yesButton.style.fontSize = `${currentFontSize + 1}px`;
    yesButton.style.padding = `${currentPadding + 1}px ${currentPadding + 1}px`;

    console.log(`Updated font size: ${yesButton.style.fontSize}`);
    console.log(`Updated padding: ${yesButton.style.padding}`);

    // Hide the .gifs and .love-counter sections
    const gifsSection = document.querySelector('.gifs');
    const loveCounterSection = document.querySelector('.love-counter');

    if (gifsSection && loveCounterSection) {
      gifsSection.style.display = 'none';
      loveCounterSection.style.display = 'none';
      console.log('Gifs and love-counter sections hidden');
    } else {
      console.error('Sections not found in the DOM');
    }
  });
});



//counter
function updateLoveCounter() {
  // Set the countdown target to February 14th, 2025, 00:00:00 in Tashkent time (GMT+5)
  const targetDate = new Date('2025-02-14T00:00:00+05:00'); 

  const now = new Date(); // Current date and time
  const elapsedTime = targetDate - now; // Time remaining in milliseconds

  if (elapsedTime >= 0) {
    // Convert remaining time into days, hours, minutes, and seconds
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    // Format the string
    const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update the #love-counter span
    document.getElementById('love-counter').textContent = formattedTime;
  } else {
    // When the countdown ends
    document.getElementById('love-counter').textContent = "Happy Valentine's Day! 🎁";
  }
}

// Update the counter every second
setInterval(updateLoveCounter, 1000);
updateLoveCounter(); // Initial call


    //Confetti
    document.getElementById('confetti-button').addEventListener('click', () => {
      // Trigger confetti effect
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 } // Adjusts the starting point of confetti
      });
    
      // Select and make both sections visible
      const gifsSection = document.querySelector('.gifs');
      const loveCounterSection = document.querySelector('.love-counter');
      
      gifsSection.style.display = 'block';
      loveCounterSection.style.display = 'block';
    
      // Scroll smoothly to the gifs section first
      gifsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
    
    