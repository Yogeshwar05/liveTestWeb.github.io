// IntersectionObserver Setup
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0 // Trigger when element just starts to enter
});

// Function to attach observer to elements
function animation(classname) {
  document.querySelectorAll(`.${classname}`).forEach(elem => {
    observer.observe(elem);
  });
}

// Observe all animated elements
animation('animate-on-scroll');
animation('animate-on-scroll-right');
animation('animate-on-scroll-top');

// Fallback for devices where observer may not trigger properly
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-right, .animate-on-scroll-top').forEach(elem => {
    if (!elem.classList.contains('visible')) {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        elem.classList.add('visible');
      }
    }
  });
});


// Add event listener for the FAQ questions
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const card = question.parentElement;
    card.classList.toggle('active');
  });
});

// Popup functionality
document.addEventListener('DOMContentLoaded', function() {
            const contactBtn = document.getElementById('contactBtn');
            const contactModal = document.getElementById('contactModal');
            const closeBtn = document.getElementById('closeBtn');

            contactBtn.addEventListener('click', function() {
                contactModal.classList.add('active');
            });

            closeBtn.addEventListener('click', function() {
                contactModal.classList.remove('active');
            });

            // Close modal when clicking outside the modal content
            window.addEventListener('click', function(event) {
                if (event.target === contactModal) {
                    contactModal.classList.remove('active');
                }
            });
        });
        
document.addEventListener('DOMContentLoaded', function() {
            const contactBtn = document.getElementById('anotherBtn');
            const contactModal = document.getElementById('contactModal');
            const closeBtn = document.getElementById('closeBtn');

            contactBtn.addEventListener('click', function() {
                contactModal.classList.add('active');
            });

            closeBtn.addEventListener('click', function() {
                contactModal.classList.remove('active');
            });

            // Close modal when clicking outside the modal content
            window.addEventListener('click', function(event) {
                if (event.target === contactModal) {
                    contactModal.classList.remove('active');
                }
            });
        });
