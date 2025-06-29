// IntersectionObserver Setup
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-1');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1 // Trigger when element is fully in view
});

// Function to attach observer to elements
function animation(classname) {
  document.querySelectorAll(`.${classname}`).forEach(elem => {
    observer.observe(elem);
  });
}

// Observe all animated elements
animation('fadeUp');
animation('fade-anime');
animation('fadeInLeftRight');

// Fallback for devices where observer may not trigger properly
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fadeUp, fade-anime, fadeInLeftRight').forEach(elem => {
    if (!elem.classList.contains('visible-1')) {
      const rect = elem.getBoundingClientRect();
      const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (fullyVisible) {
        elem.classList.add('visible-1');
      }
    }
  });
});
