export function faq() {

    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const card = question.closest('.faq-card');
            
            document.querySelectorAll('.faq-card.active').forEach(activeCard => {
                if (activeCard !== card) activeCard.classList.remove('active');
            });
            
            card.classList.toggle('active');
        });
    });

}