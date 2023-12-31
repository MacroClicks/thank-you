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

fire(0.50, {
  spread: 26,
  startVelocity: 55,
});

fire(0.3, {
  spread: 60,
});

fire(1, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.2, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});


function applyBlurredBackground() {
window.addEventListener('resize', applyBlurredBackground);
  const backgroundElement = document.querySelector('.blur-background');
  const width = window.innerWidth;

  let imagePath;

  if (width >= 1250) {
    imagePath = 'pic5.JPG';
  } else if (width >= 1024) {
    imagePath = 'pic4.JPG';
  } else if (width >= 768) {
    imagePath = 'pic3.JPG';
  } else if (width >= 580) {
    imagePath = 'pic2.JPG';
  } else {
    imagePath = 'pic1.JPG';
  }

  backgroundElement.style.backgroundImage = `url(${imagePath})`;
  });
// Apply on initial load
applyBlurredBackground();





