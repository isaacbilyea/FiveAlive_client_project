export function missionButtons() {

    //VARIABLES
    const missionButtons = document.querySelectorAll('.read-more-btn, .arrow');

    //FUNCTIONS
    function toggleMissionContent(e) {
        const missionCard = e.currentTarget.closest('.mission');
        const button = missionCard.querySelector('.read-more-btn');
        
        missionCard.classList.toggle('expanded');
        
        if (missionCard.classList.contains('expanded')) {
            button.textContent = 'Read Less';
        } else {
            button.textContent = 'Read More';
        }
    }

    //EVENT LISTENERS
    missionButtons.forEach(button => {
        button.addEventListener('click', toggleMissionContent);
    });

}