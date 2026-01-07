// ----------------------
// Fade-in sections on scroll
// ----------------------
document.addEventListener("DOMContentLoaded", function() {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// ----------------------
// Confetti Effect
// ----------------------
function createConfetti() {
  const confettiCount = 100; // Number of confetti pieces
  const colors = ['#c9a24d', '#ffffff', '#000000', '#f2c94c', '#ff6b6b'];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.width = confetti.style.height = (Math.random() * 8 + 4) + 'px';
    document.body.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// ----------------------
// Trigger confetti when clicking the Continue button
// ----------------------
document.addEventListener('DOMContentLoaded', function() {
  const continueBtn = document.getElementById('continue-btn');
  if (continueBtn) {
    continueBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Stop immediate navigation
      createConfetti();
      // Delay navigation so confetti shows
      setTimeout(() => {
        window.location.href = continueBtn.getAttribute('href');
      }, 500);
    });
  }
  // Floating hearts effect
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.width = heart.style.height = (10 + Math.random() * 10) + 'px';
  document.body.appendChild(heart);

  // Remove after animation
  setTimeout(() => heart.remove(), 5000);
}

// Create hearts every 300ms
setInterval(createHeart, 300);

});
