// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple event search functionality
document.querySelector('.event-search button').addEventListener('click', function() {
    const searchTerm = document.querySelector('.event-search input').value.toLowerCase();
    document.querySelectorAll('.event-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Allow search on Enter key
document.querySelector('.event-search input').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.event-search button').click();
    }
});

// Animate timeline items on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Animate tradition cards on scroll
const traditionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.tradition-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.5s ease ${index * 0.1}s`;
    traditionObserver.observe(card);
});



function selectResource(element, url) {
    // Remove selected class from all resources
    document.querySelectorAll('.resource-item').forEach(item => {
        item.classList.remove('selected');
        const container = item.querySelector('.learn-more-container');
        container.innerHTML = '';
    });

    // Add selected class to clicked resource
    element.classList.add('selected');

    // Create and append Learn More button
    const container = element.querySelector('.learn-more-container');
    container.innerHTML = `<a href="${url}" class="learn-more-button" target="_blank" rel="noopener">Learn More →</a>`;

    // Smooth scroll to ensure the selected item is fully visible
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

