function toggleMenu() {
    var menu = document.getElementById('navbar-menu');
    menu.classList.toggle('show');
}
// ----------------Preguntas frecuentes-----------------------
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

