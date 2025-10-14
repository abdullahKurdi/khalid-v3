// Press / Media rendering for media.html
// Keeps your bilingual approach via data-en/data-ar and localStorage.language

(function () {
  const lang = getLang();

  // Provided links + requested title override for the Al-Jazirah (17 Jan 2025)
  // Put snapshots in imgs/media/*.jpg (names below). Missing images fall back.
  const pressItems = [
    {
      id: 1,
      title: {
        en: "Saudi visual artist turns passion for Arabic calligraphy into icons of beauty",
        ar: "فنان سعودي يحول شغفه بالخط العربي إلى أيقونات من الجمال",
      },
      source: "Arab News",
      date: "2025-10-11",
      url: "https://www.arabnews.com/node/2220561#.Y6XIoI0WFlQ.whatsapp",
      image: "imgs/media/arabnews-2220561.jpg",
    },
    {
      id: 2,
      // Owner note: title on site should be exactly this Arabic line.
      title: {
        en: "Al-Mutlaq represents Saudi Arabia at 'Al-Khatt 2025' in Tantora (AlUla)",
        ar: "المطلق يمثل المملكة في معرض «الخط 2025م» في طنطورة",
      },
      source: "Al-Jazirah",
      date: "2025-01-24",
      url: "https://www.al-jazirah.com/2025/20250124/fm1.htm",
      image: "imgs/home/newphoto.jpeg",
    },
    // {
    //   id: 3,
    //   title: {
    //     en: "Al-Jazirah feature (duplicate link provided)",
    //     ar: "تغطية صحيفة الجزيرة (رابط مكرر كما ورد)",
    //   },
    //   source: "Al-Jazirah",
    //   date: "2025-01-17",
    //   url: "https://www.al-jazirah.com/2025/20250117/fm2.htm",
    //   image: "imgs/media/aljazirah-20250117-fm2-2.jpg",
    // },
    {
      id: 4,
      title: {
        en: "Al-Jazirah feature — 24 Jan 2025",
        ar: "تغطية صحيفة الجزيرة",
      },
      source: "Al-Jazirah",
      date: "2025-01-17",
      url: "https://www.al-jazirah.com/2025/20250117/fm2.htm",
      image: "imgs/media/aljazirah-20250117-fm2.jpg",
    },
    {
      id: 5,
      title: {
        en: "Khalid Almutlaq shares his journey with Arabic calligraphy, inspired by his father",
        ar: "الفنان خالد المطلق يروي رحلته مع الخط العربي تأثراً بوالده",
      },
      source: "Sayidaty",
      date: "2023-12-17", // day unknown; use 01 for sorting; adjust later if needed
      url: "https://www.sayidaty.net/%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%B0%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D9%85%D9%83%D9%8A%D9%86/%D9%82%D8%B5%D8%B5-%D9%85%D9%84%D9%87%D9%85%D8%A9/1705476-%D8%A7%D9%84%D9%81%D9%86%D8%A7%D9%86-%D8%AE%D8%A7%D9%84%D8%AF-%D8%A7%D9%84%D9%85%D8%B7%D9%84%D9%82-%D9%8A%D8%B1%D9%88%D9%8A-%D8%B1%D8%AD%D9%84%D8%AA%D9%87-%D9%85%D8%B9-%D8%A7%D9%84%D8%AE%D8%B7-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A-%D8%AA%D8%A3%D8%AB%D8%B1%D8%A7%D9%8B-%D8%A8%D9%88%D8%A7%D9%84%D8%AF%D9%87",
      image: "imgs/media/sayidaty-1705476.jpg",
    },
    {
      id: 6,
      title: {
        en: "Arabic Magazine feature",
        ar: "تغطية مجلة العربية",
      },
      source: "Arabic Magazine",
      date: "2025-8-31", // unknown; set month for grouping
      url: "https://www.arabicmagazine.net/arabic/ArticleDetails.aspx?id=10901",
      image: "imgs/media/arabicmagazine-10901.jpg",
    },
    {
      id: 7,
      title: {
        en: "Elaph newspaper coverage (Oct 2025)",
        ar: "تغطية صحيفة إيلاف",
      },
      source: "Elaph",
      date: "2025-10-04", 
      url: "https://elaph.com/Web/NewsPapers/2025/10/1578739.html",
      image: "imgs/media/elaph-1578739.jpg",
    },
    {
      id: 8,
      title: {
        en: "Al-Jazirah feature — 5 Apr 2024",
        ar: "خالد المطلق.. مسيرة فنان",
      },
      source: "Al-Jazirah",
      date: "2024-04-05",
      url: "https://www.al-jazirah.com/2024/20240405/fm1.htm#google_vignette",
      image: "imgs/media/aljazirah-20240405-fm1.jpg",
    }
  ];

  // Sort newest first
//   pressItems.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  // DOM
  const grid = document.getElementById('pressGrid');
  const featured = {
    wrap: document.getElementById('featuredPress'),
    img: document.querySelector('#featuredPress .featured-image img'),
    badge: document.querySelector('#featuredPress .featured-badge'),
    title: document.getElementById('featuredTitle'),
    srcdate: document.getElementById('featuredSourceDate'),
    link: document.getElementById('featuredLink')
  };

  // Render featured (use the first item after sort)
  const top = pressItems[0];
  if (top && featured.wrap) {
    const t = getTitle(top);
    featured.img.src = top.image;
    featured.img.alt = t;
    featured.title.textContent = t;
    featured.title.setAttribute('data-en', top.title.en);
    featured.title.setAttribute('data-ar', top.title.ar);
    featured.srcdate.innerHTML = mixSourceDate(top);
    featured.link.href = top.url;

    featured.img.addEventListener('error', function () {
      this.src = 'imgs/sacred-heritage.jpg';
      this.alt = lang === 'ar' ? 'صورة بديلة للخبر' : 'Press image placeholder';
    });
  }

  // Render rest to grid
  if (grid) {
    grid.innerHTML = '';
    pressItems.slice(1).forEach((item, idx) => {
      grid.appendChild(makeCard(item, idx));
    });
  }

  // Language apply on load + on custom event if your site dispatches it
  applyI18n();
  window.addEventListener('languageChanged', applyI18n);

  function makeCard(item, idx) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.style.animationDelay = `${idx * 0.1}s`;

    const t = getTitle(item);

    card.innerHTML = `
      <div class="blog-image">
        <img src="${item.image}" alt="${escapeHtml(t)}" loading="lazy">
        <div class="blog-category"><span class="press-source-badge">${escapeHtml(item.source)}</span></div>
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <span class="blog-date">📅 ${formatDate(item.date)}</span>
          <span class="blog-read-time">${item.source}</span>
        </div>
        <h3 class="blog-title"
            data-en="${escapeAttr(item.title.en)}"
            data-ar="${escapeAttr(item.title.ar)}">${escapeHtml(t)}</h3>
        <p class="blog-excerpt">${mixSourceDate(item)}</p>
        <a href="${item.url}" class="blog-read-more" target="_blank" rel="noopener noreferrer"
           data-en="View Article" data-ar="عرض الخبر">
          <span data-en="View Article" data-ar="عرض الخبر">${lang === 'ar' ? 'عرض الخبر' : 'View Article'}</span>
          <span>↗</span>
        </a>
      </div>
    `;

    // open in new tab when card clicked (except when clicking link)
    card.addEventListener('click', (e) => {
      if (!e.target.closest('a')) window.open(item.url, '_blank', 'noopener');
    });

    const img = card.querySelector('img');
    img.addEventListener('error', function () {
      this.src = 'imgs/sacred-heritage.jpg';
      this.alt = lang === 'ar' ? 'صورة بديلة للخبر' : 'Press image placeholder';
    });

    return card;
  }

  // Helpers
  function getLang() {
    return localStorage.getItem('language') || 'en';
  }

  function getTitle(item) {
    return (getLang() === 'ar' ? item.title.ar : item.title.en);
  }

  function mixSourceDate(item) {
    const l = getLang();
    const d = formatDate(item.date);
    if (l === 'ar') {
      return `<strong>${escapeHtml(item.source)}</strong> — ${escapeHtml(d)}`;
    }
    return `<strong>${escapeHtml(item.source)}</strong> — ${escapeHtml(d)}`;
  }

  function formatDate(iso) {
    if (!iso) return '—';
    try {
      const safe = iso.replace('??', '01');
      const d = new Date(safe);
      return new Intl.DateTimeFormat('en-US', {year:'numeric', month:'long', day:'numeric'}).format(d);
    } catch { return iso; }
  }

  function applyI18n() {
    const l = getLang();

    // <title>
    const titleEl = document.querySelector('title');
    if (titleEl) {
      const t = titleEl.getAttribute(`data-${l}`);
      if (t) titleEl.textContent = t;
    }

    // swap any .i18n texts on the page
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      const v = el.getAttribute(`data-${l}`);
      if (v) el.textContent = v;
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function escapeAttr(s) {
    return String(s).replace(/"/g,'&quot;').replace(/</g,'&lt;');
  }
})();
