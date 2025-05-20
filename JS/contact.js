// Initialize contact form
document.addEventListener('DOMContentLoaded', () => {
  // Initialize form validation and submission
  if (DOM.contactForm) {
    DOM.contactForm.addEventListener('submit', handleFormSubmit);
  }
});

// Handle form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(DOM.contactForm);
  const formValues = Object.fromEntries(formData.entries());
  
  // Validate form
  const errors = validateForm(formValues);
  
  // Remove any existing error messages
  clearFormErrors();
  
  // If there are errors, display them and return
  if (Object.keys(errors).length > 0) {
    displayFormErrors(errors);
    return;
  }
  
  // Show success message (in a real implementation, this would submit to a server)
  showFormSuccess();
  
  // Reset form
  DOM.contactForm.reset();
}

// Validate form data
function validateForm(formValues) {
  const errors = {};
  
  // Name validation
  if (!formValues.name.trim()) {
    errors.name = 'Name is required';
  }
  
  // Email validation
  if (!formValues.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formValues.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Subject validation
  if (!formValues.subject.trim()) {
    errors.subject = 'Subject is required';
  }
  
  // Message validation
  if (!formValues.message.trim()) {
    errors.message = 'Message is required';
  } else if (formValues.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return errors;
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Clear all form error messages
function clearFormErrors() {
  // Remove error message elements
  const errorMessages = DOM.contactForm.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.remove());
  
  // Remove error classes from inputs
  const inputs = DOM.contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.classList.remove('input-error');
  });
}

// Display form error messages
function displayFormErrors(errors) {
  Object.entries(errors).forEach(([field, message]) => {
    const input = DOM.contactForm.querySelector(`[name="${field}"]`);
    if (input) {
      // Add error class to input
      input.classList.add('input-error');
      
      // Create and append error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      errorDiv.style.color = 'var(--color-error)';
      errorDiv.style.fontSize = 'var(--font-size-sm)';
      errorDiv.style.marginTop = 'var(--space-1)';
      
      input.parentNode.appendChild(errorDiv);
    }
  });
}

// Show form success message
function showFormSuccess() {
  // Create success message
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.textContent = 'Thank you for your message! I\'ll get back to you soon.';
  successDiv.style.backgroundColor = 'var(--color-success)';
  successDiv.style.color = 'white';
  successDiv.style.padding = 'var(--space-4)';
  successDiv.style.borderRadius = 'var(--border-radius)';
  successDiv.style.marginBottom = 'var(--space-4)';
  
  // Add to form
  DOM.contactForm.prepend(successDiv);
  
  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}