// About Page JavaScript

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add any about page specific functionality here
  console.log('About page loaded');
  
  // Initialize any animations or interactions specific to the about page
  initializeAboutPage();
});

function initializeAboutPage() {
  // Add smooth scrolling for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item, index) => {
    // Add staggered animation delay
    item.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Add hover effects for skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}
