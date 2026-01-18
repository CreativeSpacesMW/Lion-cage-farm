// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Load data based on current page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadProducts();
    } else if (window.location.pathname.includes('about.html')) {
        loadTeamMembers();
    }
});

// Function to load and display products
async function loadProducts() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        const cashCropsGrid = document.getElementById('cash-crops-grid');
        const produceGrid = document.getElementById('produce-grid');
        
        if (cashCropsGrid && produceGrid) {
            // Clear existing content
            cashCropsGrid.innerHTML = '';
            produceGrid.innerHTML = '';
            
            // Filter and display cash crops
            const cashCrops = data.products.filter(product => product.category === 'Cash Crop');
            cashCrops.forEach(product => {
                cashCropsGrid.appendChild(createProductCard(product));
            });
            
            // Filter and display produce
            const produce = data.products.filter(product => product.category === 'Produce');
            produce.forEach(product => {
                produceGrid.appendChild(createProductCard(product));
            });
        }
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Function to create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in-up';
    
    const iconClass = product.icon || getDefaultIcon(product.name);
    
    card.innerHTML = `
        <div class="product-card-header">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
        </div>
        <div class="product-card-content">
            <i class="${iconClass} product-icon"></i>
            <p class="product-description">${product.description}</p>
            <a href="contact.html?product=${encodeURIComponent(product.name)}" 
               class="cta-button" 
               style="display: inline-block; padding: 0.5rem 1.5rem; font-size: 0.9rem;">
                Inquire Now
            </a>
        </div>
    `;
    
    return card;
}

// Function to get default icon based on product name
function getDefaultIcon(productName) {
    const iconMap = {
        'Soy Beans': 'fas fa-seedling',
        'Maize': 'fas fa-corn',
        'Groundnuts': 'fas fa-peanuts',
        'Fresh Milk': 'fas fa-wine-bottle',
        'Beef & Goat Meat': 'fas fa-drumstick-bite'
    };
    
    return iconMap[productName] || 'fas fa-leaf';
}

// Function to load and display team members
async function loadTeamMembers() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        
        const teamGrid = document.getElementById('team-grid');
        
        if (teamGrid) {
            // Clear existing content
            teamGrid.innerHTML = '';
            
            // Display all team members
            data.staff.forEach((member, index) => {
                teamGrid.appendChild(createTeamMemberCard(member, index));
            });
        }
    } catch (error) {
        console.error('Error loading team members:', error);
    }
}

// Function to create team member card HTML
function createTeamMemberCard(member, index) {
    const card = document.createElement('div');
    card.className = 'team-member-card fade-in-up';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="team-member-icon">
            <i class="fas fa-user-tie"></i>
        </div>
        <h3 class="team-member-name">${member.name}</h3>
        <div class="team-member-role">${member.role}</div>
        <p class="product-description" style="font-size: 0.9rem;">${member.description}</p>
    `;
    
    return card;
}

// Function to handle WhatsApp Onboarding
function sendToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const product = document.getElementById('product-interest').value;
    const message = document.getElementById('message').value.trim();
    
    if (!name || !product || !message) {
        alert('Please fill in all required fields.');
        return false;
    }
    
    const phoneNumber = "265888123456"; // Replace with actual WhatsApp number
    
    const text = `Hello Lion Cage Global Farm! %0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Product Interested In:* ${product}%0A` +
                 `*Message:* ${message}%0A%0A` +
                 `_Sent via Lion Cage Farm Website_`;
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    
    // Optional: Clear form after submission
    setTimeout(() => {
        document.getElementById('contactForm').reset();
    }, 1000);
    
    return false; // Prevent form submission
}

// Function to pre-fill product based on URL parameter
function prefillProductFromURL() {
    if (window.location.pathname.includes('contact.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const product = urlParams.get('product');
        
        if (product) {
            const productSelect = document.getElementById('product-interest');
            if (productSelect) {
                productSelect.value = product;
            }
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    prefillProductFromURL();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});