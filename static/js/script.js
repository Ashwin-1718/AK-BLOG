document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    const themeToggleButton = document.getElementById('themeToggle');

    // Back to Top Button
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        if (scrolled > 200) {  // Show button after scrolling down 200px
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Set audio start time for 'myAudio'
    const audio1 = document.getElementById('myAudio');
    audio1.addEventListener('loadedmetadata', function () {
        audio1.currentTime = 183; // Set the time to 60 seconds (1 minute)
        audio1.play();
    });

    // Theme Toggle Functionality
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggleButton.textContent = '🌙'; // Moon icon for light mode
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggleButton.textContent = '☀️'; // Sun icon for dark mode
            localStorage.setItem('theme', 'dark');
        }
    });

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleButton.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
});