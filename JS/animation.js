// Add animation effects to page elements
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initAnimations();
  
  // Re-run animations that should be triggered on scroll
  window.addEventListener('scroll', () => {
    runScrollAnimations();
  });
});

// Initialize animations
function initAnimations() {
  // Add CSS for animations that are not in the CSS files
  addAnimationStyles();
  
  // Run scroll animations once on page load
  runScrollAnimations();
  
  // Animate particles data visualization elements
  animateDataParticles();
}

// Add animation styles dynamically
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); box-shadow: var(--shadow-md); }
      50% { transform: scale(1.05); box-shadow: var(--shadow-lg); }
      100% { transform: scale(1); box-shadow: var(--shadow-md); }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes moveRandom {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(10px, 10px) rotate(5deg); }
      50% { transform: translate(-5px, 20px) rotate(-5deg); }
      75% { transform: translate(-10px, -10px) rotate(3deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
    
    .data-particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      animation: moveRandom 30s infinite linear;
    }
    
    .data-dot {
      border-radius: 50%;
    }
    
    .data-bar {
      border-radius: 4px;
    }
    
    .data-line {
      border-radius: 4px;
    }
    
    .animate-on-scroll {
      opacity: 0;
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-on-scroll.animate-fade-in-up {
      transform: translateY(20px);
    }
    
    .animate-on-scroll.animate-fade-in-left {
      transform: translateX(20px);
    }
    
    .animate-on-scroll.animate-fade-in-right {
      transform: translateX(-20px);
    }
    
    .animate-on-scroll.visible {
      opacity: 1;
      transform: translate(0, 0);
    }
  `;
  
  document.head.appendChild(style);
  
  // Add animation classes to elements
  addAnimationClasses();
}

// Add animation classes to page elements
function addAnimationClasses() {
  // Hero section animations
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');
  
  if (heroContent) heroContent.classList.add('animate-on-scroll', 'animate-fade-in-right');
  if (heroImage) heroImage.classList.add('animate-on-scroll', 'animate-fade-in-left');
  
  // Section headers animation
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    header.classList.add('animate-on-scroll', 'animate-fade-in-up');
  });
  
  // Portfolio cards animation
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.classList.add('animate-on-scroll', 'animate-fade-in-up');
    card.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // Skills animation
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach((category, index) => {
    category.classList.add('animate-on-scroll', 'animate-fade-in-up');
    category.style.transitionDelay = `${index * 0.1}s`;
  });
  
  // About section animation
  const aboutImage = document.querySelector('.about-image');
  const aboutText = document.querySelector('.about-text');
  
  if (aboutImage) aboutImage.classList.add('animate-on-scroll', 'animate-fade-in-right');
  if (aboutText) aboutText.classList.add('animate-on-scroll', 'animate-fade-in-left');
  
  // Contact section animation
  const contactInfo = document.querySelector('.contact-info');
  const contactForm = document.querySelector('.contact-form');
  
  if (contactInfo) contactInfo.classList.add('animate-on-scroll', 'animate-fade-in-right');
  if (contactForm) contactForm.classList.add('animate-on-scroll', 'animate-fade-in-left');
}

// Run animations based on scroll position
function runScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  animatedElements.forEach(element => {
    if (isElementInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Check if element is in viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight * 0.8 &&
    rect.bottom >= 0
  );
}

// Animate data particles
function animateDataParticles() {
  const particles = document.querySelectorAll('.data-particle');
  
  particles.forEach(particle => {
    // Set random animation properties
    const duration = 20 + Math.random() * 30;
    const delay = Math.random() * 5;
    
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
  });
}