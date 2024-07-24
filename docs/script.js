const card = document.querySelector('.card');
const container = document.querySelector('.card-container');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
});

container.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

container.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.6s';
});