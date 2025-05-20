// Handle header scroll effect
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add/remove scrolled class based on scroll position
  if (scrollTop > 50) {
    DOM.header.classList.add('scrolled');
  } else {
    DOM.header.classList.remove('scrolled');
  }
  
  // Highlight current section in navigation
  updateActiveNavLink();
});

// Mobile menu toggle
if (DOM.menuToggle) {
  DOM.menuToggle.addEventListener('click', () => {
    DOM.navLinksContainer.classList.toggle('active');
    
    // Toggle menu icon
    const icon = DOM.menuToggle.querySelector('i');
    if (DOM.navLinksContainer.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      
      // Create backdrop if it doesn't exist
      if (!document.querySelector('.menu-backdrop')) {
        const backdrop = document.createElement('div');
        backdrop.className = 'menu-backdrop';
        document.body.appendChild(backdrop);
        
        // Add event listener to close menu when backdrop is clicked
        backdrop.addEventListener('click', () => {
          DOM.navLinksContainer.classList.remove('active');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
          backdrop.classList.remove('active');
          setTimeout(() => {
            backdrop.remove();
          }, 300);
        });
        
        // Add active class after a small delay to trigger transition
        setTimeout(() => {
          backdrop.classList.add('active');
        }, 10);
      }
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      
      const backdrop = document.querySelector('.menu-backdrop');
      if (backdrop) {
        backdrop.classList.remove('active');
        setTimeout(() => {
          backdrop.remove();
        }, 300);
      }
    }
  });
}

// Smooth scrolling for navigation links
DOM.navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (DOM.navLinksContainer.classList.contains('active')) {
      DOM.navLinksContainer.classList.remove('active');
      const icon = DOM.menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      
      const backdrop = document.querySelector('.menu-backdrop');
      if (backdrop) {
        backdrop.classList.remove('active');
        setTimeout(() => {
          backdrop.remove();
        }, 300);
      }
    }
    
    // Get the target element
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Calculate offset based on header height
      const headerHeight = DOM.header.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerHeight;
      
      // Smooth scroll to target
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset to trigger earlier
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      DOM.navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // Add active class to corresponding link
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Initialize active nav link on page load
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNavLink();
});