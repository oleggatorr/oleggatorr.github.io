document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // элемент виден хотя бы на 10%
  });

  // Наблюдаем за всеми .fade-in
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});
