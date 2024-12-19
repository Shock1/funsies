NodeList.prototype.animate = function (keyframes, options) {
  this.forEach((el, i) => {
    let delay = options.delay || 0;  // Default to 0 if no delay
    if (options.stagger) {
      delay = options.delay + options.stagger * i;  // Calculate delay based on index
    }
    el.animate(keyframes, {
      ...options,
      delay
    });
  });
};

// Default rainbow colors
const colors = ["#7400b8","#6930c3","#5e60ce","#5390d9","#4ea8de","#48bfe3","#56cfe1","#64dfdf","#72efdd","#80ffdb"];

// Generate textShadow for default colors
let rainbowEnd = '';
let rainbowEnd2 = '';
colors.reverse().forEach((c, i) => {
  rainbowEnd += `,0 ${(i - 5) * 5}vh ${i * 2}px ${c}`;
});
colors.forEach((c, i) => {
  rainbowEnd2 += `,0 ${(i - 5) * -5}vh ${i * 2}px ${c}`;
});
rainbowEnd = rainbowEnd.substring(1);
rainbowEnd2 = rainbowEnd2.substring(1);

// Year colors
const YearColors = ["#f8c8dc", "#f7a2bc", "#f57fa1", "#f25585", "#ed3b6d", "#e7345f", "#d92b53", "#d22844", "#c61b37", "#a61a31"];
let YearrainbowEnd = '';
let YearrainbowEnd2 = '';
YearColors.reverse().forEach((c, i) => {
  YearrainbowEnd += `,0 ${(i - 5) * 5}vh ${i * 2}px ${c}`;
});
YearColors.forEach((c, i) => {
  YearrainbowEnd2 += `,0 ${(i - 5) * -5}vh ${i * 2}px ${c}`;
});
YearrainbowEnd = YearrainbowEnd.substring(1);
YearrainbowEnd2 = YearrainbowEnd2.substring(1);

// Apply default rainbow textShadow to all spans
document.querySelectorAll('h1 span').forEach((el, index) => {
  const isSpecial = el.id === 'year';  // Check if the span is special
  const textShadowValue = isSpecial ? [YearrainbowEnd, YearrainbowEnd2] : [rainbowEnd, rainbowEnd2];  // Choose correct textShadow
  
  el.animate({
    textShadow: textShadowValue
  }, {
    duration: 2000,
    delay: index * 100, // Stagger delay dynamically based on index
    iterations: Infinity,
    easing: 'cubic-bezier(0.3, 0, 0.7, 1)',
    direction: 'alternate',
    fill: 'both'
  });
});
