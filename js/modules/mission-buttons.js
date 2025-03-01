export function missionButtons() {
    
    const missionButtons = document.querySelectorAll('.read-more-btn, .arrow');

    missionButtons.forEach(element => {
        element.addEventListener('click', () => {
            const missionCard = element.closest('.mission');
            const button = missionCard.querySelector('.read-more-btn');
            
            missionCard.classList.toggle('expanded');
            
            if (missionCard.classList.contains('expanded')) {
                button.textContent = 'Read Less';
            } else {
                button.textContent = 'Read More';
            }
        });
    });
}