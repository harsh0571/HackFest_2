document.addEventListener('DOMContentLoaded', function() {
  // Fade in elements
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 1s ease-out';
    setTimeout(() => {
      el.style.opacity = '1';
    }, 100);
  });

  // Slide in elements
  const slideElements = document.querySelectorAll('.slide-in');
  slideElements.forEach(el => {
    el.style.transform = 'translateY(50px)';
    el.style.opacity = '0';
    el.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    setTimeout(() => {
      el.style.transform = 'translateY(0)';
      el.style.opacity = '1';
    }, 100);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Parallax effect for header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  });
});
