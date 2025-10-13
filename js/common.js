/* ===========================================================
   Khalid Al-Mutlaq Website Script
   Includes: Language Switcher, Navigation, UI Interactions
   Updated: Oct 2025 (with static i18n opt-out support)
=========================================================== */

// ========== Translations ==========
const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_exhibitions: 'Exhibitions',
    nav_media: 'Media',
    nav_contact: 'Contact',



    // Mobile Menu
    mobile_artworks: 'Traditional Calligraphy',

    // Common (fallbacks; pages may override via data-en/data-ar)
    section_title: 'My Journey and Contemporary Art through Letters and Colors.',
    search_placeholder: 'Search artworks...',
    footer_text: '© 2025 Khalid Al-Mutlaq. All rights reserved.',
    view_toggle_title: 'Toggle grid view',

    // Modal
    modal_category: 'Category',
    modal_medium: 'Medium',
    modal_dimensions: 'Dimensions',

    // About Page
    about_title: 'Khalid Mohammed Al-Mutlaq',
    about_subtitle: 'Master of Traditional Arabic Calligraphy',
    about_description: 'Khalid Mohammed Al-Mutlaq, born in 1981, is a Saudi artist and calligrapher who holds a certificate in Arabic calligraphy and a professional evaluation certificate from Sotheby\'s Institute of Art in collaboration with Misk Art Institute.',
    about_journey: 'Artistic Journey',
    about_journey_subtitle: 'A life dedicated to the art of the Arabic letter',
    about_philosophy: 'Traditional Calligraphy Mastery',
    about_philosophy_subtitle: 'Preserving the sacred art of Islamic calligraphy',

    // Exhibitions Page
    exhibitions_title: 'Traditional Calligraphy Exhibitions',

    // Media Page
    media_title: 'Traditional Calligraphy Media',

    // Contact Page
    contact_title: 'Get in Touch'
  },

  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_about: 'نبذة عني',

    nav_exhibitions: 'المعارض',
    nav_media: 'الإعلام',
    nav_contact: 'تواصل معي',


    // Mobile Menu
    mobile_artworks: 'الخط العربي التقليدي',

    // Common (fallbacks; pages may override via data-en/data-ar)
    section_title: 'المدارس الفنية المعاصرة في أعمالي الفنية وتطبيقاتها',
    search_placeholder: 'البحث في الأعمال الفنية...',
    footer_text: '© ٢٠٢٥ خالد المطلق. جميع الحقوق محفوظة.',
    view_toggle_title: 'تبديل عرض الشبكة',

    // Modal
    modal_category: 'الفئة',
    modal_medium: 'الوسيط',
    modal_dimensions: 'الأبعاد',

    // About Page
    about_title: 'خالد محمد المطلق',
    about_subtitle: 'أستاذ الخط العربي التقليدي',
    about_description: 'خالد محمد المطلق من مواليد 1981، فنان وخطاط سعودي حاصل على إجازة الخط العربي وشهادة التقييم الفني من معهد سوثبي للفنون بالتعاون مع معهد مسك.',
    about_journey: 'الرحلة الفنية',
    about_journey_subtitle: 'حياة مكرسة لفن الحرف العربي',
    about_philosophy: 'إتقان الخط العربي التقليدي',
    about_philosophy_subtitle: 'الحفاظ على الفن المقدس للخط الإسلامي',

    // Exhibitions Page
    exhibitions_title: 'معارض الخط العربي التقليدي',

    // Media Page
    media_title: 'إعلام الخط العربي التقليدي',

    // Contact Page
    contact_title: 'تواصل معنا'
  }
};

// ========== Global State ==========
let currentLang = localStorage.getItem('language') || 'en';

// ========== Mobile Navigation ==========
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileNavOverlay');
  if (mobileNav && overlay) {
    mobileNav.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileNavOverlay');
  if (mobileNav && overlay) {
    mobileNav.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// ========== Mobile Dropdown ==========
function toggleMobileDropdown(button) {
  const content = button.nextElementSibling;
  const isOpen = button.classList.contains('open');

  document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
    btn.classList.remove('open');
    if (btn.nextElementSibling) btn.nextElementSibling.classList.remove('show');
  });

  if (!isOpen) {
    button.classList.add('open');
    content.classList.add('show');
  }
}

// ========== Language Switcher ==========
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = translations[lang];
  const rtl = lang === 'ar';

  // Direction & lang
  document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  // Update all elements with data-en and data-ar attributes, EXCEPT elements marked static.
  document.querySelectorAll('[data-en][data-ar]:not([data-static])').forEach(element => {
    const enText = element.getAttribute('data-en');
    const arText = element.getAttribute('data-ar');
    element.textContent = rtl ? arText : enText;
  });

  // Update navigation
  const mainNav = document.querySelectorAll('.main-nav > .nav-item > a');
  if (mainNav[0]) mainNav[0].textContent = t.nav_home;
  if (mainNav[1]) mainNav[1].textContent = t.nav_about;

  if (mainNav[2]) mainNav[2].textContent = t.nav_exhibitions;
  if (mainNav[3]) mainNav[3].textContent = t.nav_media;
  if (mainNav[4]) mainNav[4].textContent = t.nav_contact;



  // Mobile nav
  const mobileLinks = document.querySelectorAll('.mobile-nav-item > a');
  if (mobileLinks[0]) mobileLinks[0].textContent = t.nav_home;
  if (mobileLinks[1]) mobileLinks[1].textContent = t.nav_about;
  if (mobileLinks[2]) mobileLinks[2].textContent = t.nav_exhibitions;
  if (mobileLinks[3]) mobileLinks[3].textContent = t.nav_media;
  if (mobileLinks[4]) mobileLinks[4].textContent = t.nav_contact;

  const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
  if (mobileDropdownToggle) mobileDropdownToggle.textContent = t.mobile_artworks;

  const mobileDropdownLinks = document.querySelectorAll('.mobile-dropdown-content a');
  if (mobileDropdownLinks[0]) mobileDropdownLinks[0].textContent = t.artworks_calligraphy;
  if (mobileDropdownLinks[1]) mobileDropdownLinks[1].textContent = t.artworks_paintings;
  if (mobileDropdownLinks[2]) mobileDropdownLinks[2].textContent = t.artworks_sculptures;

  // Search placeholder
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = t.search_placeholder;

  // View toggle title
  const viewToggle = document.querySelector('.view-toggle');
  if (viewToggle) viewToggle.setAttribute('title', t.view_toggle_title);

  // Section title (fallback only): don't override if element has its own data-en/ar OR is marked static
  const possibleSectionTitles = document.querySelectorAll('.section-title');
  possibleSectionTitles.forEach(el => {
    const isStatic = el.hasAttribute('data-static');
    const hasOwnI18n = el.hasAttribute('data-en') && el.hasAttribute('data-ar');
    if (!isStatic && !hasOwnI18n) {
      el.textContent = t.section_title;
    }
  });

  // Footer text
  const footerText = document.querySelector('footer p');
  if (footerText) footerText.textContent = t.footer_text;

  // Modal labels
  const modalLabels = document.querySelectorAll('.modal-detail-label');
  if (modalLabels.length >= 3) {
    modalLabels[0].textContent = t.modal_category;
    modalLabels[1].textContent = t.modal_medium;
    modalLabels[2].textContent = t.modal_dimensions;
  }

  // Page-specific (handled separately)
  if (typeof updatePageSpecific === 'function') updatePageSpecific(t);

  // Update gallery language if function exists (for home page)
  if (typeof updateGalleryLanguage === 'function') {
    updateGalleryLanguage();
  }
}

// ========== Page-Specific Override ==========
function updatePageSpecific() {
  /* individual pages can override this */
}

// ========== Initialization ==========
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  applyLanguage(currentLang);
});

// ========== Resize Event ==========
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href && href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// ========== Active Nav Highlight ==========
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
