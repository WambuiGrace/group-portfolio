// Get the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Listen for a click event
darkModeToggle.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent link jump

    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');

    // Optional: Change the moon icon to sun when in dark mode
    const icon = darkModeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
