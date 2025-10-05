# File Structure - Khaled Al-Mutlaq Portfolio

## ✅ Separated Files Successfully Created

### 📁 **CSS Files** (`css/`)
```
css/
├── styles.css      # Common styles for all pages (navigation, header, footer, RTL)
└── home.css        # Home page specific styles (hero slider, gallery, modal)
```

### 📁 **JavaScript Files** (`js/`)
```
js/
├── common.js       # Shared functionality (language switcher, mobile menu, navigation)
└── home.js         # Home page specific (gallery modal, slider, search)
```

### 📁 **HTML Pages**
```
├── home.html       # Homepage with hero slider and gallery
├── about.html      # About page with biography
├── painting.html   # Paintings gallery
├── exhibitions.html # Exhibition history
├── blogs.html      # Blog posts
└── contact.html    # Contact form
```

## 🎨 **CSS Architecture**

### `css/styles.css` - Common Styles (ALL PAGES)
✅ CSS Reset & Base styles  
✅ Color variables (black & white theme)  
✅ Typography (Roboto for EN, Tajawal for AR)  
✅ Top header & navigation  
✅ Logo styling  
✅ Dropdown menus  
✅ Search box  
✅ Language switcher  
✅ Mobile navigation  
✅ Footer  
✅ **Complete RTL Support**  
✅ Responsive breakpoints  

### `css/home.css` - Home Page Styles
✅ Hero slider with variable widths  
✅ Slide indicators  
✅ Gallery grid layout  
✅ Gallery modal/lightbox  
✅ Modal navigation  
✅ Home-specific responsive rules  
✅ Home RTL overrides  

## 📜 **JavaScript Architecture**

### `js/common.js` - Shared Functionality (ALL PAGES)
✅ **Language Translations** (EN/AR) for all pages  
✅ Language switcher with localStorage  
✅ Apply language function  
✅ Mobile menu toggle  
✅ Mobile dropdown  
✅ Navigation active states  
✅ Smooth scrolling  
✅ Resize handlers  

### `js/home.js` - Home Page Functionality
✅ Artwork data array (12 artworks)  
✅ Gallery population  
✅ Modal open/close  
✅ Modal navigation (prev/next)  
✅ Keyboard controls (ESC, arrows)  
✅ Hero slider functionality  
✅ Auto-advance slider  
✅ Slide indicators  
✅ View toggle (grid/list)  
✅ Search functionality  

## 🔗 **How to Link in HTML**

### Head Section:
```html
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/[page-name].css">
```

### Before `</body>`:
```html
<script src="js/common.js"></script>
<script src="js/[page-name].js"></script>
```

## 📋 **To-Do: Update HTML Files**

Current status:
- ✅ `css/styles.css` created
- ✅ `css/home.css` created
- ✅ `js/common.js` created
- ✅ `js/home.js` created
- ⏳ `home.html` - needs inline CSS/JS removed
- ⏳ Other pages - need to link to external files

## 🎯 **Benefits of Separation**

1. **Maintainability**: Update styles in one place
2. **Performance**: Browser caching of CSS/JS files
3. **Organization**: Clear separation of concerns
4. **Scalability**: Easy to add new pages
5. **Reusability**: Common code shared across pages
6. **Debugging**: Easier to find and fix issues
7. **Collaboration**: Multiple developers can work simultaneously

## 🌍 **Bilingual Support**

All translations stored in `js/common.js`:
- Navigation menus (EN/AR)
- Dropdown items (decades)
- Search placeholders
- Footer text
- Modal labels
- Page titles

Language preference saved in browser localStorage.

## 📱 **Features Included**

✅ Responsive design (desktop, tablet, mobile)  
✅ Modern black & white theme  
✅ Arabic font (Tajawal)  
✅ Full RTL support  
✅ Gallery modal viewer  
✅ Hero slider with auto-advance  
✅ Mobile menu (slides from right)  
✅ Search functionality  
✅ View toggle  
✅ Dropdown menus  

---

**Next Step**: Update all HTML files to remove inline CSS/JS and link to external files for cleaner, production-ready code.

