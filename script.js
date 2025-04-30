// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href');
      const section = document.querySelector(targetID);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

  // Animated Counters for Stats
  const counters = document.querySelectorAll('.stat strong');
  let started = false;
  
  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.textContent;
      counter.textContent =  '0';
      const updateCount = () => {
        const current = +counter.textContent;
        const increment = target / 100;
        if (current < target) {
          counter.textContent = Math.ceil(current + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.textContent = target;
        }
      };
      updateCount();
    });
  }
  
  window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats');
    const statsTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (statsTop < windowHeight && !started) {
      started = true;
      animateCounters();
    }
  });
  