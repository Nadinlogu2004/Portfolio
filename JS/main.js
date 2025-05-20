    // Set initial scroll position for header
let lastScrollTop = 0;

// DOM elements to be used across modules
const DOM = {
  header: document.getElementById('header'),
  navLinks: document.querySelectorAll('.nav-link'),
  menuToggle: document.querySelector('.menu-toggle'),
  navLinksContainer: document.querySelector('.nav-links'),
  portfolio: {
    projectsGrid: document.getElementById('portfolio-grid'),
    filterButtons: document.querySelectorAll('.filter-btn')
  },
  testimonials: {
    track: document.getElementById('testimonial-track'),
    prevBtn: document.getElementById('testimonial-prev'),
    nextBtn: document.getElementById('testimonial-next'),
    dotsContainer: document.getElementById('testimonial-dots')
  },
  modal: {
    container: document.getElementById('project-modal'),
    closeBtn: document.querySelector('.modal-close'),
    title: document.getElementById('modal-title'),
    image: document.getElementById('modal-image'),
    description: document.getElementById('modal-description'),
    technologies: document.getElementById('modal-technologies')
  },
  contactForm: document.getElementById('contact-form')
};

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
  // Initialize skill progress bars
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    // Get the width from the parent element's span that shows the percentage
    const width = bar.closest('.skill-item').querySelector('.skill-info span:last-child').textContent;
    bar.style.setProperty('--progress-width', width);
  });
  
  // Create data particles (decorative elements)
  createDataParticles();
  
  // Initialize footer year
  document.querySelector('.footer-bottom p').textContent = `© ${new Date().getFullYear()} DataViz Pro. All rights reserved.`;
});

// Generate data particles
function createDataParticles() {
  const particlesContainer = document.querySelector('.data-particles');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    
    // Random particle type (dot, bar, line)
    const particleType = Math.floor(Math.random() * 3);
    let particleClass = 'data-particle';
    
    switch (particleType) {
      case 0:
        particleClass += ' data-dot';
        break;
      case 1:
        particleClass += ' data-bar';
        break;
      case 2:
        particleClass += ' data-line';
        break;
    }
    
    particle.className = particleClass;
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    // Random size
    const size = 5 + Math.random() * 15;
    
    // Random opacity
    const opacity = 0.1 + Math.random() * 0.3;
    
    // Random color
    const colors = ['#3182ce', '#38b2ac', '#1a365d', '#ecc94b'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Set styles
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = opacity;
    particle.style.backgroundColor = color;
    
    if (particleType === 0) { // Dot
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
    } else if (particleType === 1) { // Bar
      particle.style.width = `${size}px`;
      particle.style.height = `${size * 2}px`;
    } else { // Line
      particle.style.width = `${size * 3}px`;
      particle.style.height = `${size / 2}px`;
    }
    
    // Random animation duration
    const animDuration = 15 + Math.random() * 30;
    particle.style.animationDuration = `${animDuration}s`;
    
    // Random animation delay
    const animDelay = Math.random() * 10;
    particle.style.animationDelay = `${animDelay}s`;
    
    particlesContainer.appendChild(particle);
  }
}