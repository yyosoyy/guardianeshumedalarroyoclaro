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
function toggleCustomAnswer(id) {
    const answer = document.getElementById(id);
    const question = answer.previousElementSibling;
    const icon = document.getElementById(`icon-${id.split('-')[2]}`);
    
    answer.classList.toggle('show');
    question.setAttribute('aria-expanded', answer.classList.contains('show'));
    icon.textContent = answer.classList.contains('show') ? '-' : '+';
}

document.getElementById('toggle-all').addEventListener('click', function() {
    const answers = document.querySelectorAll('.custom-faq-answer');
    const isVisible = Array.from(answers).every(answer => answer.classList.contains('show'));
    answers.forEach(answer => {
        answer.classList.toggle('show', !isVisible);
    });
    this.textContent = isVisible ? 'Ver Más' : 'Ver Menos';
});
