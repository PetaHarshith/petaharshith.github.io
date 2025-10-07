// auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// add subtle fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.opacity = 1;
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transition = 'opacity 0.6s';
  observer.observe(sec);
});
