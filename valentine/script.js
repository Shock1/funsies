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

let items;
let scrollerScrub;
let dimmerScrub;
let chromaEntry;
let chromaExit;

// Wait for the DOM to be fully loaded before running animations
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');

  // Validate and initialize items for animation
  items = gsap.utils.toArray('ul li');
  if (items.length === 0) {
    console.error("No items found matching the selector 'ul li'");
    return; // Stop execution if no items are found
  } else {
    console.log(`Found ${items.length} items to animate.`);
  }

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Initialize animations
  gsap.set(items, { opacity: (i) => (i !== 0 ? 0.2 : 1) });

  const dimmer = gsap
    .timeline()
    .to(items.slice(1), {
      opacity: 1,
      stagger: 0.5,
    })
    .to(
      items.slice(0, items.length - 1),
      {
        opacity: 0.2,
        stagger: 0.5,
      },
      0
    );

  dimmerScrub = ScrollTrigger.create({
    trigger: items[0],
    endTrigger: items[items.length - 1],
    start: 'center center',
    end: 'center center',
    animation: dimmer,
    scrub: 0.2,
  });

  const scroller = gsap.timeline().fromTo(
    document.documentElement,
    {
      '--hue': config.start,
    },
    {
      '--hue': config.end,
      ease: 'none',
    }
  );

  scrollerScrub = ScrollTrigger.create({
    trigger: items[0],
    endTrigger: items[items.length - 1],
    start: 'center center',
    end: 'center center',
    animation: scroller,
    scrub: 0.2,
  });

  chromaEntry = gsap.fromTo(
    document.documentElement,
    {
      '--chroma': 0,
    },
    {
      '--chroma': 0.3,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.2,
        trigger: items[0],
        start: 'center center+=40',
        end: 'center center',
      },
    }
  );

  chromaExit = gsap.fromTo(
    document.documentElement,
    {
      '--chroma': 0.3,
    },
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
});

// Attach button functionality
document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');

  if (!yesButton || !noButton) {
    console.error('Buttons not found in the DOM');
    return;
  }

  noButton.addEventListener('click', () => {
    console.log('No button clicked');

    const currentFontSize = parseFloat(
      window.getComputedStyle(yesButton).fontSize
    );
    const currentPadding = parseFloat(
      window.getComputedStyle(yesButton).padding
    );

    yesButton.style.fontSize = `${currentFontSize + 10}px`;
    yesButton.style.padding = `${currentPadding + 10}px ${currentPadding + 10}px`;

    console.log(`Updated font size: ${yesButton.style.fontSize}`);
    console.log(`Updated padding: ${yesButton.style.padding}`);
  });
});
