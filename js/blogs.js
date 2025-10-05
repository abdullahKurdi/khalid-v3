// Blogs Page JavaScript

// Blog data with images
const blogData = [
  {
    id: 1,
    title: {
      en: "The Art of Traditional Arabic Calligraphy",
      ar: "فن الخط العربي التقليدي"
    },
    excerpt: {
      en: "Exploring the sacred art of Arabic calligraphy and its spiritual significance in Islamic culture.",
      ar: "استكشاف الفن المقدس للخط العربي وأهميته الروحية في الثقافة الإسلامية."
    },
    image: "imgs/sacred-heritage.jpg",
    date: "2024-12-15",
    category: "Traditional",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: {
      en: "Mastering the Thuluth Script",
      ar: "إتقان خط الثلث"
    },
    excerpt: {
      en: "A comprehensive guide to learning the classical Thuluth script, the most prestigious form of Arabic calligraphy.",
      ar: "دليل شامل لتعلم خط الثلث الكلاسيكي، وهو أرقى أشكال الخط العربي."
    },
    image: "imgs/golden-proportions.jpg",
    date: "2024-12-10",
    category: "Technique",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: {
      en: "The Spiritual Journey of Calligraphy",
      ar: "الرحلة الروحية للخط"
    },
    excerpt: {
      en: "How the practice of calligraphy becomes a spiritual discipline and form of meditation.",
      ar: "كيف تصبح ممارسة الخط انضباطاً روحياً وشكلاً من أشكال التأمل."
    },
    image: "imgs/rhythm-letters.jpg",
    date: "2024-12-05",
    category: "Philosophy",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: {
      en: "Tools and Materials for Calligraphy",
      ar: "أدوات ومواد الخط"
    },
    excerpt: {
      en: "Essential tools and materials every calligrapher needs to master the art of Arabic calligraphy.",
      ar: "الأدوات والمواد الأساسية التي يحتاجها كل خطاط لإتقان فن الخط العربي."
    },
    image: "imgs/contemporary-echoes.jpg",
    date: "2024-11-28",
    category: "Tools",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: {
      en: "Contemporary Calligraphy Trends",
      ar: "اتجاهات الخط المعاصر"
    },
    excerpt: {
      en: "How modern artists are preserving traditional calligraphy while adapting to contemporary aesthetics.",
      ar: "كيف يحافظ الفنانون المعاصرون على الخط التقليدي مع التكيف مع الجماليات المعاصرة."
    },
    image: "imgs/abstract-letters.jpg",
    date: "2024-11-20",
    category: "Contemporary",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: {
      en: "The History of Arabic Calligraphy",
      ar: "تاريخ الخط العربي"
    },
    excerpt: {
      en: "Tracing the evolution of Arabic calligraphy from its origins to its current status as a revered art form.",
      ar: "تتبع تطور الخط العربي من أصوله إلى وضعه الحالي كفن محترم."
    },
    image: "imgs/heritage-reimagined.jpg",
    date: "2024-11-15",
    category: "History",
    readTime: "10 min read"
  }
];

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Blogs page loaded');
  
  // Initialize blogs page functionality
  initializeBlogsPage();
});

function initializeBlogsPage() {
  console.log('Blogs page initialized');
  
  // Load and display blog posts
  loadBlogPosts();
  
  // Initialize animations
  initializeBlogsAnimations();
}

function loadBlogPosts() {
  const blogGrid = document.querySelector('.blog-grid');
  if (!blogGrid) return;

  // Get current language
  const currentLang = localStorage.getItem('language') || 'en';
  
  // Clear existing content
  blogGrid.innerHTML = '';
  
  // Create blog cards
  blogData.forEach((blog, index) => {
    const blogCard = createBlogCard(blog, currentLang, index);
    blogGrid.appendChild(blogCard);
  });
}

function createBlogCard(blog, lang, index) {
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.style.animationDelay = `${index * 0.1}s`;
  
  card.innerHTML = `
    <div class="blog-image">
      <img src="${blog.image}" alt="${blog.title[lang]}" loading="lazy">
      <div class="blog-category">${blog.category}</div>
    </div>
    <div class="blog-content">
      <div class="blog-meta">
        <span class="blog-date">📅 ${formatDate(blog.date)}</span>
        <span class="blog-read-time">${blog.readTime}</span>
      </div>
      <h3 class="blog-title" data-en="${blog.title.en}" data-ar="${blog.title.ar}">${blog.title[lang]}</h3>
      <p class="blog-excerpt" data-en="${blog.excerpt.en}" data-ar="${blog.excerpt.ar}">${blog.excerpt[lang]}</p>
      <a href="#" class="blog-read-more" data-en="Read More" data-ar="اقرأ المزيد">
        <span data-en="Read More" data-ar="اقرأ المزيد">Read More</span> 
        <span>→</span>
      </a>
    </div>
  `;
  
  // Add click handler
  card.addEventListener('click', function() {
    console.log('Blog card clicked:', blog.title[lang]);
    // Future: Navigate to blog post detail page
  });
  
  return card;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function initializeBlogsAnimations() {
  // Add smooth scrolling for blog cards
  const blogCards = document.querySelectorAll('.blog-card');
  
  blogCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Add hover effects for blog cards
  blogCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px)';
      this.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
    });
  });
  
  // Add image loading effects
  const blogImages = document.querySelectorAll('.blog-card img');
  blogImages.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
      this.src = 'imgs/sacred-heritage.jpg';
      this.alt = 'Blog image placeholder';
    });
  });
}

