(() => {
  const slideContainer = document.querySelector('.carrossel-slide');
  const slides = document.querySelectorAll('.carrossel-img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let counter = 0;
  let slideWidth = slides[0].clientWidth;
  let isAnimating = false;
  let autoPlayInterval = null;

  function updateSlide(instant = false) {
    slideContainer.style.transition = instant ? 'none' : 'transform 0.5s ease-in-out';
    slideContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
  }

  function nextSlide() {
    if (isAnimating) return;
    isAnimating = true;

    counter = (counter + 1) % slides.length;
    updateSlide();

    setTimeout(() => (isAnimating = false), 500);
  }

  function prevSlide() {
    if (isAnimating) return;
    isAnimating = true;

    counter = (counter - 1 + slides.length) % slides.length;
    updateSlide();

    setTimeout(() => (isAnimating = false), 500);
  }

  function resizeHandler() {
    slideWidth = slides[0].clientWidth;
    updateSlide(true);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Troca a cada 5 segundos
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Botões manuais
  nextBtn.addEventListener('click', () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay(); // Reinicia autoplay ao clicar
  });

  prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay(); // Reinicia autoplay ao clicar
  });

  window.addEventListener('resize', resizeHandler);

  // Inicialização
  updateSlide(true);
  startAutoPlay();
})();
