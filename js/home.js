// Home Page JavaScript

// Simplified artwork data with titles only
const artworks = [
  {
    title: { en: 'Calligraphic Forms – Mural', ar: 'حروفيات - جدارية' },
    src: 'imgs/home/first.jpg'
  },
  {
    title: { en: 'Sovereignty is to God, then to Abdulaziz – Mural', ar: 'الحكم لله ثم لعبدالعزيز - جدارية' },
    src: 'imgs/home/second.jpg'
  },
  {
    title: { en: 'Black and White Calligraphic Forms – Artwork', ar: 'حروفيات الأبيض والأسود - عمل فني' },
    src: 'imgs/home/third.jpg'
  },
  {
    title: { en: 'Poetic Composition – Artwork', ar: 'قصيدة شعرية - عمل فني' },
    src: 'imgs/home/fourth.jpg'
  },
  {
    title: { en: 'Calligraphic Forms in Silver and Royal Blue – Mural', ar: 'حروفيات بالفضة و الأزرق الملكي - جدارية' },
    src: 'imgs/home/sixth.jpg'
  },
  {
    title: { en: 'Collaboration with Saint Louis – AlUla Festival', ar: 'تعاون مع سانت لويس - مهرجان العلا' },
    src: ['imgs/home/WhatsApp Image 2025-10-13 at 8.27.20 PM.jpeg']
  },
  {
    title: { en: 'Words of His Highness the Founder Sheikh Jassim bin Mohammed bin Thani - Special Artwork', ar: 'كلمات سمو الشيخ المؤسس جاسم بن محمد بن ثاني - عمل خاص' },
    src: 'imgs/home/eighth.jpg'
  },
  {
    title: { en: 'Abstraction – Artwork', ar: 'اختزال - عمل فني' },
    src: 'imgs/home/ninth.jpg'
  },
  {
    title: { en: 'His Highness Prince Abdullah bin Musaad bin Abdulrahman Al Saud (may he rest in peace) – Special Artwork', ar: 'سمو الأمير عبدالله بن مساعد بن عبدالرحمن ال سعود رحمه الله - عمل خاص' },
    src: 'imgs/home/tenth.jpg'
  },
  {
    title: { en: 'Mural – Ministry of Culture (Special Artwork)', ar: 'جدارية - وزارة الثقافة "عمل خاص"' },
    src: 'imgs/home/eleventh.jpg'
  },
  {
    title: { en: 'Modern Legacy', ar: 'مدارات - عمل خاص' },
    src: 'imgs/home/twelveth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/therteenth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/fourteenth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/fifteenth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/sixteenth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/seventeenth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/eighteenth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/nineteenth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/twenteth.jpg'
  },
  {
    title: { en: 'Contemporary Works – Artwork', ar: 'أعمال معاصرة - عمل فني' },
    src: 'imgs/home/twentyfirst.jpg'
  }
];

// Current modal artwork index
let currentModalIndex = 0;

// Get current language
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// Populate gallery
const gallery = document.getElementById('gallery');
artworks.forEach((artwork, index) => {
  const item = document.createElement('a');
  item.className = 'gallery-item';
  item.href = '#';
  item.setAttribute('data-index', index);
  item.onclick = (e) => {
    e.preventDefault();
    openGalleryModal(index);
  };

  const currentLang = getCurrentLanguage();

  const imageContent = Array.isArray(artwork.src)
    ? `<div class="scrollable-images" dir="ltr">${artwork.src.map(s => `<img src="${s}" alt="${artwork.title[currentLang]}" loading="lazy">`).join('')}</div>`
    : `<img src="${artwork.src}" alt="${artwork.title[currentLang]}" loading="lazy">`;

  item.innerHTML = `
    <div class="gallery-item-inner">
      ${imageContent}
    </div>
    <div class="gallery-caption">
      <div class="caption-title" data-en="${artwork.title.en}" data-ar="${artwork.title.ar}">${artwork.title[currentLang]}</div>
    </div>
  `;

  gallery.appendChild(item);
});

// Gallery Modal Functions
function openGalleryModal(index) {
  currentModalIndex = index;
  updateModalContent();
  document.getElementById('galleryModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  document.getElementById('galleryModal').classList.remove('active');
  document.body.style.overflow = '';
}

function navigateGallery(direction) {
  currentModalIndex = (currentModalIndex + direction + artworks.length) % artworks.length;
  updateModalContent();
}

function updateModalContent() {
  const artwork = artworks[currentModalIndex];
  const currentLang = getCurrentLanguage();

  const modalSrc = Array.isArray(artwork.src) ? artwork.src[0] : artwork.src;
  document.getElementById('modalArtworkImage').src = modalSrc;
  document.getElementById('modalArtworkImage').alt = artwork.title[currentLang];
  document.getElementById('modalArtworkTitle').textContent = artwork.title[currentLang];
  document.getElementById('modalArtworkTitle').setAttribute('data-en', artwork.title.en);
  document.getElementById('modalArtworkTitle').setAttribute('data-ar', artwork.title.ar);
}

// Close modal on overlay click
document.getElementById('galleryModal').addEventListener('click', (e) => {
  if (e.target.id === 'galleryModal') {
    closeGalleryModal();
  }
});

// Close modal on Escape key and navigate with arrows
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('galleryModal');
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeGalleryModal();
  }
  // Navigate with arrow keys
  if (modal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') navigateGallery(-1);
    if (e.key === 'ArrowRight') navigateGallery(1);
  }
});

// Hero slider functionality with variable widths
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicatorsContainer = document.getElementById('heroIndicators');

// Check if device is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Create indicators
slides.forEach((slide, index) => {
  const indicator = document.createElement('div');
  indicator.className = 'hero-indicator';
  if (index === 0) indicator.classList.add('active');
  indicator.onclick = () => goToSlide(index);
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll('.hero-indicator');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev', 'next');
    if (i === index) {
      slide.classList.add('active');
    } else if (i < index) {
      slide.classList.add('prev');
    } else {
      slide.classList.add('next');
    }
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  // Disable arrow navigation on mobile
  if (isMobile()) return;

  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  // Disable arrow navigation on mobile
  if (isMobile()) return;

  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds (only on desktop)
let sliderInterval = setInterval(() => {
  if (!isMobile()) {
    nextSlide();
  }
}, 5000);

// Pause on hover (desktop only)
const heroSection = document.querySelector('.hero-section');
heroSection.addEventListener('mouseenter', () => {
  if (!isMobile()) {
    clearInterval(sliderInterval);
  }
});

heroSection.addEventListener('mouseleave', () => {
  if (!isMobile()) {
    sliderInterval = setInterval(() => {
      if (!isMobile()) {
        nextSlide();
      }
    }, 5000);
  }
});

// Touch/swipe functionality for mobile
let touchStartX = 0;
let touchEndX = 0;

heroSection.addEventListener('touchstart', (e) => {
  if (isMobile()) {
    touchStartX = e.changedTouches[0].screenX;
  }
});

heroSection.addEventListener('touchend', (e) => {
  if (isMobile()) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next slide
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    } else {
      // Swipe right - previous slide
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  }
}

// Toggle sidebar functionality
function toggleSidebar(event) {
  if (event) event.preventDefault();
  const sidebar = document.getElementById('leftSidebar');
  const mainContent = document.getElementById('mainContent');

  sidebar.classList.toggle('show');
  mainContent.classList.toggle('with-sidebar');
}

// View toggle functionality
let isGridView = true;
function toggleView() {
  const gallery = document.getElementById('gallery');
  const viewToggle = document.querySelector('.view-toggle');
  isGridView = !isGridView;

  viewToggle.classList.toggle('active');

  if (isGridView) {
    gallery.style.gridTemplateColumns = 'repeat(auto-fill, minmax(320px, 1fr))';
    viewToggle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    `;
  } else {
    gallery.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    viewToggle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
  }
}

// Update gallery when language changes
function updateGalleryLanguage() {
  const currentLang = getCurrentLanguage();
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach((item, index) => {
    const artwork = artworks[index];
    const titleElement = item.querySelector('.caption-title');
    const imgElements = item.querySelectorAll('img');

    // Update title
    titleElement.textContent = artwork.title[currentLang];
    titleElement.setAttribute('data-en', artwork.title.en);
    titleElement.setAttribute('data-ar', artwork.title.ar);

    // Update image alt texts
    imgElements.forEach(img => {
      img.alt = artwork.title[currentLang];
    });
  });

  // Update modal if open
  if (document.getElementById('galleryModal').classList.contains('active')) {
    updateModalContent();
  }
}

// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
      const title = item.querySelector('.caption-title').textContent.toLowerCase();

      if (title.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Handle window resize to update mobile state
window.addEventListener('resize', () => {
  // Update slider behavior based on screen size
  if (isMobile()) {
    clearInterval(sliderInterval);
  } else {
    sliderInterval = setInterval(() => {
      if (!isMobile()) {
        nextSlide();
      }
    }, 5000);
  }
});

// Sidebar navigation active state
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});