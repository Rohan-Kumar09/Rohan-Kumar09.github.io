const black = "black";
const white = "white";
const sunImage = "./images/sun.png";
const moonImage = "./images/moon.png";
const sun = 'sun';
const moon = 'moon';
const navbarHideTime = 2000; // 2 seconds
const homeHideTime = 200; // 0.2 seconds

// Dark mode toggle
function changeMode() {
    const root = document.documentElement;
    const isDarkMode = root.classList.toggle('dark-mode');

    const logo = document.getElementById("color-logo");
    if (logo) {
        logo.src = isDarkMode ? moonImage : sunImage;
        logo.classList.toggle(sun, !isDarkMode);
        logo.classList.toggle(moon, isDarkMode);
    }
}

// For navbar / menu buttons
function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.content section');
    const targetSection = document.getElementById(sectionId);
    sections.forEach(section => {
        section.classList.toggle('active', section === targetSection);
        section.classList.toggle('inactive', section !== targetSection);
    });
}


// add event listeners to menu buttons
document.addEventListener('DOMContentLoaded', () => {
    const sectionId = location.hash.replace('#', '') || 'home';
    navigateTo(sectionId);

    // Show navbar for 5 seconds on page load
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('hidden');
    setTimeout(() => {
        navbar.classList.add('hidden');
    }, navbarHideTime);

    // Hide navbar after inactivity
    let hideNavbarTimeout;
    function resetHideNavbarTimeout() {
        clearTimeout(hideNavbarTimeout);
        navbar.classList.remove('hidden');
        hideNavbarTimeout = setTimeout(() => {
            navbar.classList.add('hidden');
        }, navbarHideTime);
    }

    document.addEventListener('mousemove', resetHideNavbarTimeout);
    document.addEventListener('keydown', resetHideNavbarTimeout);
    document.addEventListener('scroll', resetHideNavbarTimeout);

    const menuButton = document.querySelector('.menu');

    // Show menu on hover over the button or the navbar
    menuButton.addEventListener('mouseenter', () => {
        navbar.classList.add('expanded');
    });

    // Hide menu when leaving both button and navbar
    menuButton.addEventListener('mouseleave', () => {
        // Delay slightly to allow moving from button to navbar
        setTimeout(() => {
            if (!navbar.matches(':hover')) {
                navbar.classList.remove('expanded');
            }
        }, homeHideTime);
    });

    navbar.addEventListener('mouseleave', () => {
        if (!menuButton.matches(':hover')) {
            navbar.classList.remove('expanded');
        }
    });
});

// Copy Discord name to clipboard
function copyDiscordName(event) {
    event.preventDefault(); // Prevent the default link behavior
    const discordName = "tempName"; // Replace with your actual Discord name
    navigator.clipboard.writeText(discordName).then(() => {
        alert("Discord name copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}