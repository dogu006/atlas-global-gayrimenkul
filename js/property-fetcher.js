// Function to display property listings section
function initializePropertySection() {
    const listingsContainer = document.getElementById('properties');
    const errorContainer = document.getElementById('property-error');
    const sahibindenUrl = 'https://atlasglobalgayrimenkul.sahibinden.com/emlak?sorting=storeShowcase&userId=aGjxSYIwIRe9d1vMVRlJ5_g';

    // Display a message directing users to sahibinden.com
    errorContainer.innerHTML = `
        <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <h3 class="text-xl font-semibold mb-4">Güncel İlanlarımız</h3>
            <p class="text-gray-600 mb-6">
                Tüm güncel ilanlarımızı görmek için sahibinden.com profilimizi ziyaret edebilirsiniz.
            </p>
            <a href="${sahibindenUrl}" 
               target="_blank" 
               class="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                <span>İlanları Görüntüle</span>
                <i class="fas fa-external-link-alt ml-2"></i>
            </a>
        </div>
    `;

    // Hide the empty properties container
    listingsContainer.style.display = 'none';
}

// Initialize when the page loads
window.addEventListener('DOMContentLoaded', initializePropertySection);
