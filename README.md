# Lion Cage Global Farm - Static Website

## 📋 Project Overview

A 3-page static website for Lion Cage Global Farm, a premium agricultural business in Malawi. The website showcases their products, team, and provides a contact form with WhatsApp integration.

## 🏗️ Project Structure

```
lion-cage-farm/
├── index.html              # Homepage with product showcase
├── about.html             # About Us page with team information
├── contact.html           # Contact page with WhatsApp form
├── style.css             # Main stylesheet (all styles)
├── script.js             # JavaScript functionality
└── data.json            # Data storage (products & staff)
```

## 🎨 Brand Colors

The website uses the following CSS variables (defined in `style.css`):
```css
--primary-yellow: #F9B233   /* Lion Cage yellow */
--accent-red: #C1272D       /* Accent red */
--primary-dark: #231F20     /* Dark text/background */
--light-gray: #f5f5f5       /* Light backgrounds */
--white: #ffffff           /* White */
```

## 🔧 How to Edit

### 1. **Update Farm Information**

#### Contact Details (`contact.html` and `index.html footer`):
- **Location**: Update the farm address in multiple locations
- **Phone Number**: Replace `+265 XXX XXX XXX` with actual number
- **Email**: Update `info@lioncagefarm.com` and `sales@lioncagefarm.com`

#### WhatsApp Number (`script.js`):
```javascript
// Line 141 in script.js
const phoneNumber = "265888123456"; // ← REPLACE THIS
```

### 2. **Update Products & Staff (`data.json`)**

#### Products Array:
Each product has:
```json
{
  "id": 1,
  "name": "Product Name",           // ← Edit product name
  "category": "Cash Crop",          // "Cash Crop" or "Produce"
  "description": "Product details", // ← Edit description
  "icon": "fas fa-seedling"        // Font Awesome icon class
}
```

#### Staff Array:
Each staff member has:
```json
{
  "name": "Position Title",        // ← Edit position name
  "role": "Main Responsibility",   // ← Edit role description
  "description": "Detailed info"   // ← Edit full description
}
```

**Note**: Changes in `data.json` automatically update on the website pages without editing HTML.

### 3. **Customize Content**

#### Homepage (`index.html`):
- **Hero Section** (Lines 27-35): Update the main headline and tagline
- **About Preview** (Lines 38-73): Modify the value proposition cards
- **Footer** (Lines 111-133): Update contact information

#### About Page (`about.html`):
- **Mission Statement** (Lines 31-41): Edit the farm's story
- **Facilities List** (Lines 44-104): Update equipment and practices
- **CEO Quote** (Lines 107-119): Modify the commitment statement

#### Contact Page (`contact.html`):
- **Contact Details** (Lines 41-80): Update all contact information
- **Business Hours** (Lines 77-80): Adjust operating hours
- **Form Products** (Lines 96-105): Edit product dropdown options

### 4. **Update Images**

#### Hero Background Images:
The website uses Unsplash placeholder images. Replace with actual farm images:

1. **Homepage Hero** (`index.html` line 28):
```css
background: linear-gradient(...), url('YOUR_IMAGE_URL');
```

2. **Map Section** (`contact.html` line 132):
```css
background: linear-gradient(...), url('YOUR_FARM_IMAGE');
```

**Recommended**: Upload images to an image hosting service or place in an `images/` folder and update URLs accordingly.

### 5. **Styling Customization (`style.css`)**

#### Font Sizes & Spacing:
```css
/* Global typography scale */
h1 { font-size: 3rem; }      /* Main headlines */
h2 { font-size: 2.25rem; }   /* Section titles */
h3 { font-size: 1.5rem; }    /* Card titles */

/* Spacing system */
--spacing-xs: 0.5rem;        /* Small gaps */
--spacing-sm: 1rem;         /* Default spacing */
--spacing-md: 2rem;         /* Between sections */
--spacing-lg: 4rem;         /* Large sections */
--spacing-xl: 6rem;         /* Hero sections */
```

#### Component Styling:
- **Cards**: Modify `.product-card`, `.team-member-card` classes
- **Buttons**: Edit `.cta-button` for primary action styling
- **Navigation**: Update `.header` and `.nav-link` classes

### 6. **JavaScript Functionality (`script.js`)**

#### Key Functions:
- **`loadProducts()`**: Fetches and displays products (lines 23-52)
- **`loadTeamMembers()`**: Loads staff information (lines 80-100)
- **`sendToWhatsApp()`**: Handles form submission (lines 141-169)
- **`prefillProductFromURL()`**: Auto-fills contact form (lines 171-183)

#### WhatsApp Message Format:
Customize the message template in `sendToWhatsApp()` function:
```javascript
const text = `Hello Lion Cage Global Farm! %0A%0A` +
             `*Name:* ${name}%0A` +
             `*Product Interested In:* ${product}%0A` +
             `*Message:* ${message}%0A%0A` +
             `_Sent via Lion Cage Farm Website_`;
```

**Note**: `%0A` represents line breaks in WhatsApp URLs.

## 📱 Responsive Breakpoints

The website is mobile-responsive with these breakpoints:
- **Desktop**: 1200px max-width container
- **Tablet**: 768px (navigation becomes hamburger menu)
- **Mobile**: 480px (adjusted font sizes and spacing)

## 🔄 Adding New Features

### Add New Page:
1. Create new HTML file (e.g., `products.html`)
2. Copy header/footer structure from existing pages
3. Add to navigation in all HTML files
4. Update `script.js` if page needs dynamic content

### Add New Product Category:
1. Add to `data.json` with unique `id`
2. Update `category` field
3. Add corresponding icon in Font Awesome classes
4. JavaScript will automatically categorize it

### Modify Form Fields:
1. Edit form in `contact.html` (lines 83-115)
2. Update `sendToWhatsApp()` function to include new fields
3. Add validation if needed

## 🚀 Deployment Instructions

### Option 1: Basic Web Hosting
1. Upload all 6 files to web hosting server
2. Ensure files maintain same directory structure
3. Test all links and form functionality

### Option 2: GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Site will be available at `username.github.io/repository-name`

### Option 3: Netlify/Vercel
1. Drag and drop folder to Netlify/Vercel
2. Automatic deployment
3. Custom domain can be added in settings

## 🐛 Troubleshooting

### Common Issues:

1. **JSON not loading**:
   - Check browser console for CORS errors
   - Ensure `data.json` is in same directory
   - Verify JSON syntax is valid

2. **WhatsApp not opening**:
   - Check phone number format (country code without +)
   - Test with your own number first
   - Ensure no pop-up blocker is interfering

3. **Mobile menu not working**:
   - Check JavaScript console for errors
   - Verify `hamburger` and `navLinks` IDs exist in HTML
   - Ensure `script.js` is linked correctly

4. **Images not displaying**:
   - Check image URLs are correct
   - Ensure images are publicly accessible
   - Verify internet connection

## 📝 Maintenance Notes

### Regular Updates:
1. **Monthly**: Update `data.json` with new products/prices
2. **Quarterly**: Review and update staff information
3. **Annually**: Update copyright year in footer

### Performance Optimization:
- Compress images before uploading
- Minify CSS/JS for production
- Use browser caching for static assets

## 📞 Support

For technical issues or customization requests:
1. Check the browser console for error messages
2. Review the specific section in this README
3. Contact the development team with specific error details

---

**Last Updated**: January 2024  
**Version**: 1.0  
**Browser Support**: Chrome, Firefox, Safari, Edge (last 2 versions)  
**Mobile Support**: iOS Safari, Chrome for Android

---

*This documentation assumes basic knowledge of HTML, CSS, and JavaScript. For major customizations, consider consulting with a web developer.*