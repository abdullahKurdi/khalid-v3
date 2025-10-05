// Home Page JavaScript

// Sample artwork data with detailed information
const artworks = [
  { 
    title: {
      en: 'Sacred Heritage',
      ar: 'التراث المقدس'
    },
    year: '2023', 
    category: {
      en: 'Calligraphic Art',
      ar: 'فن الخط'
    },
    medium: {
      en: 'Ink and gold leaf on canvas',
      ar: 'حبر وورق ذهبي على قماش'
    },
    dimensions: '120 x 90 cm',
    description: {
      en: 'A contemporary interpretation of Arabic calligraphy that celebrates the sacred heritage of Islamic art, blending traditional Thuluth script with modern visual elements.',
      ar: 'تفسير معاصر للخط العربي يحتفل بالتراث المقدس للفن الإسلامي، يدمج خط الثلث التقليدي مع العناصر البصرية الحديثة.'
    },
    src: 'imgs/sacred-heritage.jpg' 
  },
  { 
    title: {
      en: 'Rhythm of Letters',
      ar: 'إيقاع الحروف'
    },
    year: '2022', 
    category: {
      en: 'Letter-Based Art',
      ar: 'فن قائم على الحروف'
    },
    medium: {
      en: 'Mixed media on canvas',
      ar: 'وسائط مختلطة على قماش'
    },
    dimensions: '150 x 100 cm',
    description: {
      en: 'Exploring the dynamic movement inherent in Arabic letterforms, this piece captures the rhythm and flow of traditional calligraphy in a contemporary visual language.',
      ar: 'استكشاف الحركة الديناميكية الكامنة في أشكال الحروف العربية، تلتقط هذه القطعة إيقاع وتدفق الخط التقليدي في لغة بصرية معاصرة.'
    },
    src: 'imgs/rhythm-letters.jpg' 
  },
  { 
    title: {
      en: 'Golden Proportions',
      ar: 'النسب الذهبية'
    },
    year: '2021', 
    category: {
      en: 'Traditional Calligraphy',
      ar: 'الخط التقليدي'
    },
    medium: {
      en: 'Traditional ink on handmade paper',
      ar: 'حبر تقليدي على ورق مصنوع يدوياً'
    },
    dimensions: '80 x 60 cm',
    description: {
      en: 'Classical Arabic calligraphy following the traditional rules and golden proportions, demonstrating mastery of historic techniques passed down through generations.',
      ar: 'خط عربي كلاسيكي يتبع القواعد التقليدية والنسب الذهبية، يظهر إتقان التقنيات التاريخية المنقولة عبر الأجيال.'
    },
    src: 'imgs/golden-proportions.jpg' 
  },
  { 
    title: {
      en: 'Contemporary Echoes',
      ar: 'أصداء معاصرة'
    },
    year: '2023', 
    category: {
      en: 'Visual Art',
      ar: 'الفن البصري'
    },
    medium: {
      en: 'Acrylic and mixed media',
      ar: 'أكريليك ووسائط مختلطة'
    },
    dimensions: '200 x 150 cm',
    description: {
      en: 'A bold exploration of Arabic letters in contemporary context, using mixed media techniques to create texture, depth, and visual dialogue between tradition and modernity.',
      ar: 'استكشاف جريء للحروف العربية في السياق المعاصر، باستخدام تقنيات الوسائط المختلطة لخلق نسيج وعمق وحوار بصري بين التقليد والحداثة.'
    },
    src: 'imgs/contemporary-echoes.jpg' 
  },
 
  { 
    title: {
      en: 'Abstract Letters',
      ar: 'حروف مجردة'
    },
    year: '2021', 
    category: {
      en: 'Contemporary Art',
      ar: 'الفن المعاصر'
    },
    medium: {
      en: 'Acrylic on canvas',
      ar: 'أكريليك على قماش'
    },
    dimensions: '120 x 120 cm',
    description: {
      en: 'Deconstructed Arabic letters reimagined as abstract visual elements, maintaining their essence while embracing freedom of contemporary artistic expression.',
      ar: 'حروف عربية منزوعة البناء معاد تصورها كعناصر بصرية مجردة، تحافظ على جوهرها بينما تتبنى حرية التعبير الفني المعاصر.'
    },
    src: 'imgs/abstract-letters.jpg' 
  },
  { 
    title: {
      en: 'Heritage Reimagined',
      ar: 'التراث المعاد تصوره'
    },
    year: '2023', 
    category: {
      en: 'Digital Art',
      ar: 'الفن الرقمي'
    },
    medium: {
      en: 'Digital art print on canvas',
      ar: 'طباعة فنية رقمية على قماش'
    },
    dimensions: '180 x 120 cm',
    description: {
      en: 'Bridging traditional calligraphy with digital techniques to create a piece that honors Saudi heritage while embracing technological innovation and future possibilities.',
      ar: 'ربط الخط التقليدي بالتقنيات الرقمية لإنشاء قطعة تكرم التراث السعودي بينما تتبنى الابتكار التكنولوجي والإمكانيات المستقبلية.'
    },
    src: 'imgs/heritage-reimagined.jpg' 
  },
  { 
    title: {
      en: 'Poetic Forms',
      ar: 'أشكال شعرية'
    },
    year: '2020', 
    category: {
      en: 'Traditional Art',
      ar: 'الفن التقليدي'
    },
    medium: {
      en: 'Ink on handmade paper',
      ar: 'حبر على ورق مصنوع يدوياً'
    },
    dimensions: '90 x 60 cm',
    description: {
      en: 'Classical calligraphy featuring Arabic poetry, executed with traditional techniques and materials that reflect the deep cultural roots of the art form.',
      ar: 'خط كلاسيكي يضم الشعر العربي، منفذ بتقنيات ومواد تقليدية تعكس الجذور الثقافية العميقة لهذا الفن.'
    },
    src: 'imgs/poetic-forms.jpg' 
  },
  { 
    title: {
      en: 'Vibrant Voices',
      ar: 'أصوات نابضة بالحياة'
    },
    year: '2022', 
    category: {
      en: 'Mixed Media',
      ar: 'وسائط مختلطة'
    },
    medium: {
      en: 'Mixed media and gold leaf',
      ar: 'وسائط مختلطة وورق ذهبي'
    },
    dimensions: '140 x 100 cm',
    description: {
      en: 'Colorful visual interpretation where Arabic letters dance across the canvas, celebrating the linguistic beauty and cultural significance of the Arabic language.',
      ar: 'تفسير بصري ملون حيث ترقص الحروف العربية عبر القماش، تحتفل بالجمال اللغوي والأهمية الثقافية للغة العربية.'
    },
    src: 'imgs/vibrant-voices.jpg' 
  },
  { 
    title: {
      en: 'Cultural Dialogue',
      ar: 'حوار ثقافي'
    },
    year: '2021', 
    category: {
      en: 'Letter-Based Art',
      ar: 'فن قائم على الحروف'
    },
    medium: {
      en: 'Ink and acrylic on canvas',
      ar: 'حبر وأكريليك على قماش'
    },
    dimensions: '130 x 95 cm',
    description: {
      en: 'Creating dialogue between traditional calligraphic forms and contemporary visual language, reflecting the evolution of Saudi artistic expression.',
      ar: 'خلق حوار بين الأشكال الخطية التقليدية واللغة البصرية المعاصرة، يعكس تطور التعبير الفني السعودي.'
    },
    src: 'imgs/cultural-dialogue.jpg' 
  },
  { 
    title: {
      en: 'Modern Legacy',
      ar: 'التراث الحديث'
    },
    year: '2023', 
    category: {
      en: 'Contemporary Calligraphy',
      ar: 'الخط المعاصر'
    },
    medium: {
      en: 'Mixed media',
      ar: 'وسائط مختلطة'
    },
    dimensions: '160 x 110 cm',
    description: {
      en: 'Honoring the legacy of Arabic calligraphy while pushing boundaries with modern materials and techniques, creating works that speak to contemporary audiences.',
      ar: 'تكريم تراث الخط العربي بينما ندفع الحدود بالمواد والتقنيات الحديثة، نخلق أعمالاً تتحدث للجماهير المعاصرة.'
    },
    src: 'imgs/modern-legacy.jpg' 
  },
  { 
    title: {
      en: 'Timeless Beauty',
      ar: 'الجمال الخالد'
    },
    year: '2022', 
    category: {
      en: 'Calligraphic Art',
      ar: 'فن الخط'
    },
    medium: {
      en: 'Ink and gold on canvas',
      ar: 'حبر وذهب على قماش'
    },
    dimensions: '110 x 85 cm',
    description: {
      en: 'Celebrating the timeless beauty of Arabic calligraphy through carefully composed letterforms that reflect both tradition and artistic innovation.',
      ar: 'الاحتفال بالجمال الخالد للخط العربي من خلال أشكال الحروف المكونة بعناية التي تعكس كل من التقليد والابتكار الفني.'
    },
    src: 'imgs/timeless-beauty.jpg' 
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
  item.setAttribute('data-category', artwork.category[getCurrentLanguage()]);
  item.setAttribute('data-index', index);
  item.onclick = (e) => {
    e.preventDefault();
    openGalleryModal(index);
  };
  
  const currentLang = getCurrentLanguage();
  item.innerHTML = `
    <div class="gallery-item-inner">
      <img src="${artwork.src}" alt="${artwork.title[currentLang]}" loading="lazy">
    </div>
    <div class="gallery-caption">
      <div class="caption-title" data-en="${artwork.title.en}" data-ar="${artwork.title.ar}">${artwork.title[currentLang]}</div>
      <div class="caption-year">${artwork.year}</div>
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
  
  document.getElementById('modalArtworkImage').src = artwork.src;
  document.getElementById('modalArtworkImage').alt = artwork.title[currentLang];
  document.getElementById('modalArtworkTitle').textContent = artwork.title[currentLang];
  document.getElementById('modalArtworkTitle').setAttribute('data-en', artwork.title.en);
  document.getElementById('modalArtworkTitle').setAttribute('data-ar', artwork.title.ar);
  document.getElementById('modalArtworkYear').textContent = artwork.year;
  document.getElementById('modalArtworkDescription').textContent = artwork.description[currentLang];
  document.getElementById('modalArtworkDescription').setAttribute('data-en', artwork.description.en);
  document.getElementById('modalArtworkDescription').setAttribute('data-ar', artwork.description.ar);
  document.getElementById('modalArtworkCategory').textContent = artwork.category[currentLang];
  document.getElementById('modalArtworkMedium').textContent = artwork.medium[currentLang];
  document.getElementById('modalArtworkDimensions').textContent = artwork.dimensions;
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
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
let sliderInterval = setInterval(nextSlide, 5000);

// Pause on hover
const heroSection = document.querySelector('.hero-section');
heroSection.addEventListener('mouseenter', () => {
  clearInterval(sliderInterval);
});

heroSection.addEventListener('mouseleave', () => {
  sliderInterval = setInterval(nextSlide, 5000);
});

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
    const imgElement = item.querySelector('img');
    
    // Update title
    titleElement.textContent = artwork.title[currentLang];
    titleElement.setAttribute('data-en', artwork.title.en);
    titleElement.setAttribute('data-ar', artwork.title.ar);
    
    // Update image alt text
    imgElement.alt = artwork.title[currentLang];
    
    // Update category attribute
    item.setAttribute('data-category', artwork.category[currentLang]);
  });
  
  // Update modal if open
  if (document.getElementById('galleryModal').classList.contains('active')) {
    updateModalContent();
  }
}

// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      const title = item.querySelector('.caption-title').textContent.toLowerCase();
      const year = item.querySelector('.caption-year').textContent.toLowerCase();
      
      if (title.includes(searchTerm) || year.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Sidebar navigation active state
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
sidebarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

