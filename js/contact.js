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

  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  // Collect form data
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  // Prepare payload
  const payload = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
    to: "km.almutlaq07@gmail.com" // Change this if needed
  };

  // Send POST request to API
  fetch('https://xvonix.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      // Show success message
      if (successMessage) {
        successMessage.classList.add('show');
      }
      if (contactForm) {
        contactForm.reset();
      }
      setTimeout(() => {
        if (successMessage) {
          successMessage.classList.remove('show');
        }
      }, 5000);
      if (successMessage) {
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    })
    .catch(error => {
      alert('There was an error sending your message. Please try again later.');
      console.error('Contact form error:', error);
    });
}
