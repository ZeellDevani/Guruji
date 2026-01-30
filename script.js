let currentSection = 0;
const sections = ['home', 'heritage', 'gallery', 'manorath', 'calendar', 'contact', 'guru'];

function showGuru() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("guruPage").classList.remove("hidden");
    currentSection = 6;
    window.scrollTo(0, 0);
}

function showHome() {
    document.getElementById("guruPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");
    currentSection = 0;
    window.scrollTo(0, 0);
}

function scrollToSection(id) {
    showHome();
    setTimeout(function () {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }, 200);
}

function nextSection() {
    currentSection = (currentSection + 1) % sections.length;
    
    if (sections[currentSection] === 'home') {
        showHome();
    } else if (sections[currentSection] === 'guru') {
        showGuru();
    } else {
        showHome();
        setTimeout(function () {
            document.getElementById(sections[currentSection]).scrollIntoView({ behavior: "smooth" });
        }, 200);
    }
}

// Mobile sidebar functions
function toggleMobileSidebar() {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.mobile-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMobileSidebar() {
    const sidebar = document.querySelector('.mobile-sidebar');
    const overlay = document.querySelector('.mobile-overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Add click listeners for page navigation
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('homePage')) {
        document.getElementById('homePage').addEventListener('click', nextSection);
    }
    if (document.getElementById('guruPage')) {
        document.getElementById('guruPage').addEventListener('click', nextSection);
    }
    
    // Mobile sidebar event listeners
    const overlay = document.querySelector('.mobile-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeMobileSidebar);
    }
});