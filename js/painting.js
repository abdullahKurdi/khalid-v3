// Painting Page JavaScript

// Artwork data
const artworks = [
  {
    id: 1,
    title: 'Sacred Verses',
    category: 'calligraphic',
    medium: 'Ink and gold leaf on canvas',
    dimensions: '120 x 90 cm',
    year: '2022',
    description: 'A stunning integration of classical Thuluth script with contemporary visual elements, celebrating the aesthetic beauty of Quranic verses.',
    image: 'imgs/sacred-heritage.jpg'
  },
  {
    id: 2,
    title: 'Rhythms of Heritage',
    category: 'visual',
    medium: 'Acrylic and ink on canvas',
    dimensions: '150 x 100 cm',
    year: '2021',
    description: 'Visual calligraphy exploring the dynamic movement and rhythm inherent in Arabic letterforms through bold colors and abstract composition.',
    image: 'imgs/rhythm-letters.jpg'
  },
  {
    id: 3,
    title: 'Golden Proportions',
    category: 'traditional',
    medium: 'Traditional ink on handmade paper',
    dimensions: '80 x 60 cm',
    year: '2020',
    description: 'Classical Arabic calligraphy following the traditional rules and golden proportions, demonstrating mastery of the six classic scripts.',
    image: 'imgs/golden-proportions.jpg'
  },
  {
    id: 4,
    title: 'Contemporary Echoes',
    category: 'contemporary',
    medium: 'Mixed media on canvas',
    dimensions: '200 x 150 cm',
    year: '2023',
    description: 'A bold exploration of Arabic calligraphy in the contemporary context, using mixed media to create texture and depth.',
    image: 'imgs/contemporary-echoes.jpg'
  },
  {
    id: 6,
    title: 'Abstract Letters',
    category: 'visual',
    medium: 'Acrylic on canvas',
    dimensions: '120 x 120 cm',
    year: '2021',
    description: 'Deconstructed Arabic letters reimagined as abstract visual elements, maintaining their essence while embracing freedom of expression.',
    image: 'imgs/abstract-letters.jpg'
  },
  {
    id: 7,
    title: 'Heritage Reimagined',
    category: 'contemporary',
    medium: 'Digital art print on canvas',
    dimensions: '180 x 120 cm',
    year: '2023',
    description: 'Bridging traditional calligraphy with digital techniques to create a piece that honors the past while embracing the future.',
    image: 'imgs/heritage-reimagined.jpg'
  },
  {
    id: 8,
    title: 'Poetic Forms',
    category: 'traditional',
    medium: 'Ink on handmade paper',
    dimensions: '90 x 60 cm',
    year: '2020',
    description: 'Classical calligraphy featuring Arabic poetry, executed with traditional techniques and materials.',
    image: 'imgs/poetic-forms.jpg'
  },
  {
    id: 9,
    title: 'Vibrant Voices',
    category: 'visual',
    medium: 'Mixed media and gold leaf',
    dimensions: '140 x 100 cm',
    year: '2022',
    description: 'Colorful visual interpretation of Arabic calligraphy, where letters dance across the canvas in celebration of linguistic beauty.',
    image: 'imgs/vibrant-voices.jpg'
  }
];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Painting page loaded');
  
  // Initialize painting page functionality
  initializePaintingPage();
});

function initializePaintingPage() {
  // Initialize filter functionality
  initializeFilters();
  
  // Initialize modal functionality
  initializeModal();
  
  // Initial load
  populateGallery();
}

// Populate gallery
function populateGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);
  
  filteredArtworks.forEach(artwork => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.onclick = () => openModal(artwork);
    
    item.innerHTML = `
      <div class="gallery-item-inner">
        <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
      </div>
      <div class="gallery-caption">
        <div class="caption-title">${artwork.title}</div>
        <div class="caption-details">${artwork.dimensions} • ${artwork.year}</div>
        <span class="caption-category">${artwork.category}</span>
      </div>
    `;
    
    grid.appendChild(item);
  });
}

// Initialize filter functionality
function initializeFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      populateGallery(btn.dataset.filter);
    });
  });
}

// Initialize modal functionality
function initializeModal() {
  // Close modal on overlay click
  const modal = document.getElementById('artModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'artModal') {
        closeModal();
      }
    });
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

// Modal functions
function openModal(artwork) {
  const modal = document.getElementById('artModal');
  if (!modal) return;
  
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalMedium = document.getElementById('modalMedium');
  const modalDimensions = document.getElementById('modalDimensions');
  const modalYear = document.getElementById('modalYear');
  
  if (modalImage) modalImage.src = artwork.image;
  if (modalTitle) modalTitle.textContent = artwork.title;
  if (modalDescription) modalDescription.textContent = artwork.description;
  if (modalMedium) modalMedium.textContent = artwork.medium;
  if (modalDimensions) modalDimensions.textContent = artwork.dimensions;
  if (modalYear) modalYear.textContent = artwork.year;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('artModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
