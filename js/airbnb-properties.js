// Sample property data - in a real application, this would come from an API
const properties = [
    {
        id: 1,
        title: "Luxury Villa with Pool",
        location: "2 miles away",
        dates: "Oct 15-20",
        price: 199,
        rating: 4.9,
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
    },
    {
        id: 2,
        title: "Beachfront Condo",
        location: "5 miles away",
        dates: "Oct 18-23",
        price: 150,
        rating: 4.8,
        image: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg"
    },
    {
        id: 3,
        title: "Mountain Cabin",
        location: "8 miles away",
        dates: "Oct 20-25",
        price: 120,
        rating: 4.7,
        image: "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg"
    },
    {
        id: 4,
        title: "Modern City Apartment",
        location: "1 mile away",
        dates: "Oct 22-27",
        price: 180,
        rating: 4.9,
        image: "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg"
    },
    {
        id: 5,
        title: "Cozy Lakefront Cottage",
        location: "12 miles away",
        dates: "Oct 25-30",
        price: 160,
        rating: 4.8,
        image: "https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg"
    },
    {
        id: 6,
        title: "Rustic Farm Stay",
        location: "15 miles away",
        dates: "Oct 28-Nov 2",
        price: 110,
        rating: 4.6,
        image: "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg"
    },
    {
        id: 7,
        title: "Downtown Loft",
        location: "0.5 miles away",
        dates: "Nov 1-6",
        price: 175,
        rating: 4.9,
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    },
    {
        id: 8,
        title: "Seaside Bungalow",
        location: "3 miles away",
        dates: "Nov 4-9",
        price: 140,
        rating: 4.7,
        image: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg"
    }
];

// Function to create a property card
function createPropertyCard(property) {
    return `
        <div class="property-card rounded-xl overflow-hidden">
            <img src="${property.image}" alt="${property.title}" class="w-full h-64 object-cover">
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <h3 class="font-semibold">${property.title}</h3>
                    <div class="flex items-center">
                        <i class="fas fa-star text-sm rating-star"></i>
                        <span class="ml-1">${property.rating}</span>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mt-1">${property.location}</p>
                <p class="text-gray-600 text-sm">${property.dates}</p>
                <p class="mt-2"><span class="font-semibold">$${property.price}</span> night</p>
            </div>
        </div>
    `;
}

// Function to render all properties
function renderProperties() {
    console.log('Rendering properties...');
    const container = document.querySelector('.grid');
    console.log('Container found:', container);
    if (container) {
        container.innerHTML = properties.map(property => createPropertyCard(property)).join('');
        console.log('Properties rendered successfully');
    } else {
        console.error('Property container not found');
    }
}

// Function to handle search
function handleSearch(event) {
    event.preventDefault();
    // In a real application, this would filter properties based on search criteria
    console.log('Search functionality would be implemented here');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    renderProperties();

    // Add search functionality
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }

    // Add click handlers for category filters
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            // In a real application, this would filter properties by category
            console.log(`Filter by category: ${category.dataset.category}`);
        });
    });
});

// Handle mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});
