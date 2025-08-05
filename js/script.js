// Efeito 3D aprimorado nos cards
document.querySelectorAll('.card').forEach(card => {
  const inner = card.querySelector('.card-inner');
  inner.style.transition = 'transform 0.25s cubic-bezier(.25,.8,.25,1)';

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Limite de rotação para não exagerar
    const maxRotate = 15;
    let rotateX = -(y - centerY) / 10;
    let rotateY = (x - centerX) / 10;
    rotateX = Math.max(-maxRotate, Math.min(maxRotate, rotateX));
    rotateY = Math.max(-maxRotate, Math.min(maxRotate, rotateY));

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});