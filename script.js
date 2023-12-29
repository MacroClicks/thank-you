const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});

function setResponsiveBackground() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1250) {
    document.querySelector(".blur-background").style.backgroundImage = "url(5.jpg)";
  } else if (screenWidth >= 1024) {
    document.querySelector(".blur-background").style.backgroundImage = "url(4.jpg)";
  } // ...and so on for other screen sizes
}

window.addEventListener("resize", setResponsiveBackground);
setResponsiveBackground(); // Call initially
