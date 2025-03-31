export function faq() {

    //VARIABLES
    const questions = document.querySelectorAll('.faq-question');

    //FUNCTIONS
    function toggleFaq(e) {
        const clickedCard = e.currentTarget.closest('.faq-card');
        const activeCards = document.querySelectorAll('.faq-card.active');
        
        activeCards.forEach(card => {
            if (card !== clickedCard) {
                card.classList.remove('active');
            }
        });
        
        clickedCard.classList.toggle('active');
    }

    //EVENT LISTENERS
    questions.forEach(question => {
        question.addEventListener('click', toggleFaq);
    });

}