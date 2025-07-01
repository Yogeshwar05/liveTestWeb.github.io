// Hamburgers, sliders, and other elements
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navigationMenu');
    const navLinks = document.querySelectorAll('.nav-link-item');
    toggleBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');

        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            toggleBtn.querySelector('i').classList.replace('fa-times', 'fa-bars');
        });
    });
});

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


// Coming soon overlay functionality
document.addEventListener('DOMContentLoaded', function () {
  function setupPopup(triggerIdList, popupId, closeBtnId) {
    const popup = document.getElementById(popupId);
    const closePopupBtn = document.getElementById(closeBtnId);

    if (!popup) {
      console.error(`Popup element with id "${popupId}" not found.`);
      return;
    }

    if (!closePopupBtn) {
      console.error(`Close button with id "${closeBtnId}" not found.`);
      return;
    }

    triggerIdList.forEach(id => {
      const button = document.getElementById(id);
      if (!button) {
        console.warn(`No element found with id "${id}".`);
        return;
      }

      button.addEventListener('click', function () {
        popup.classList.add('active-cs');
        document.body.style.overflow = 'hidden';
      });
    });

    popup.addEventListener('click', function (e) {
      if (e.target === popup) {
        popup.classList.remove('active-cs');
        document.body.style.overflow = 'auto';
      }
    });

    closePopupBtn.addEventListener('click', function () {
      popup.classList.remove('active-cs');
      document.body.style.overflow = 'auto';
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        popup.classList.remove('active-cs');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Call with button IDs
  setupPopup(
    ['show-popup-cs-1', 'show-popup-cs-2', 'show-popup-cs-3', 'show-popup-cs-4'],
    'popup-cs',
    'close-popup-cs'
  );
});
