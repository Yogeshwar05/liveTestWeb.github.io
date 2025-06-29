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

// FAQ Section
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
});

// Popuup functionality    
document.addEventListener('DOMContentLoaded', function () {
    function setupModal(triggerBtnId, modalId, closeBtnId) {
        const contactBtn = document.getElementById(triggerBtnId);
        const contactModal = document.getElementById(modalId);
        const closeBtn = document.getElementById(closeBtnId);

        if (!contactBtn || !contactModal || !closeBtn) return;

        contactBtn.addEventListener('click', function () {
            contactModal.classList.add('active');
        });

        closeBtn.addEventListener('click', function () {
            contactModal.classList.remove('active');
        });

        window.addEventListener('click', function (event) {
            if (event.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });
    }

    // Call the function for both buttons
    setupModal('contactBtn', 'contactModal', 'closeBtn');
    setupModal('navBtn', 'contactModal', 'closeBtn');
    setupModal('anotherBtn', 'contactModal', 'closeBtn');
});


//animations

  const observer_2 = new IntersectionObserver((entries, observer_2) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer_2.unobserve(entry.target); // Animation only once
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.fade-in-left').forEach(el => {
    observer.observe(el);
  });

// coming soon pop up
// document.addEventListener('DOMContentLoaded', function () {
//       const popup = document.getElementById('popup-cs');
//       const showPopupBtn = document.getElementById('show-popup-cs');
//       const closePopupBtn = document.getElementById('close-popup-cs');

//       showPopupBtn.addEventListener('click', function () {
//         popup.classList.add('active-cs');
//         document.body.style.overflow = 'hidden';
//       });

//       popup.addEventListener('click', function (e) {
//         if (e.target === popup) {
//           popup.classList.remove('active-cs');
//           document.body.style.overflow = 'auto';
//         }
//       });

//       closePopupBtn.addEventListener('click', function () {
//         popup.classList.remove('active-cs');
//         document.body.style.overflow = 'auto';
//       });

//       document.addEventListener('keydown', function (e) {
//         if (e.key === 'Escape') {
//           popup.classList.remove('active-cs');
//           document.body.style.overflow = 'auto';
//         }
//       });
//     });

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
