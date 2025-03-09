const black = "black";
const white = "white";
const sunImage = "./images/sun.png";
const moonImage = "./images/moon.png";
const sun = 'sun';
const moon = 'moon';

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

function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.content section');
    const targetSection = document.getElementById(sectionId);
    sections.forEach(section => {
        section.classList.toggle('active', section === targetSection);
        section.classList.toggle('inactive', section !== targetSection);
    });
}