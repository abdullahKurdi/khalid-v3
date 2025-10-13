// Exhibitions Page JavaScript

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Exhibitions page loaded');
  
  // Initialize exhibitions page functionality
  initializeExhibitionsPage();
});

function initializeExhibitionsPage() {
  // Add any exhibitions page specific functionality here
  console.log('Exhibitions page initialized');
  
  // Initialize any animations or interactions specific to the exhibitions page
  initializeExhibitionsAnimations();
}

function initializeExhibitionsAnimations() {
  // Add smooth scrolling for exhibition cards
  const exhibitionCards = document.querySelectorAll('.exhibition-card');
  
  exhibitionCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Add hover effects for stat items
  const statItems = document.querySelectorAll('.stat-item');
  
  statItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}