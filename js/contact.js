// Contact Page JavaScript

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Contact page loaded');
  
  // Initialize contact form functionality
  initializeContactForm();
});

function initializeContactForm() {
  // Get the contact form
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    // Add form validation and submission handling
    contactForm.addEventListener('submit', handleSubmit);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  
  // Show success message
  const successMessage = document.getElementById('successMessage');
  if (successMessage) {
    successMessage.classList.add('show');
  }
  
  // Reset form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.reset();
  }
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    if (successMessage) {
      successMessage.classList.remove('show');
    }
  }, 5000);
  
  // Scroll to success message
  if (successMessage) {
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
