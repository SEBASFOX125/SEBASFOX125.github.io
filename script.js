document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
// Ensure smooth scrolling (fallback if needed)
document.documentElement.style.scrollBehavior = 'smooth';

// Collapse the Bootstrap navbar on link click (mobile only)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 992) {             // Bootstrap’s lg breakpoint
      document.querySelector('.navbar-toggler').click();
    }
  });
});
