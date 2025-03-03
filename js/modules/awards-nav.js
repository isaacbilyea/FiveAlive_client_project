export function awardsNav() {

    //VARIABLES
    const awardNav = document.querySelector('#award-navigation');
    const allCards = document.querySelectorAll('.award-box');

    //FUNCTIONS
    function centerCard() {
        const activeCard = document.querySelector('.award-box.active');
        const navWidth = awardNav.offsetWidth;
        const cardWidth = activeCard.offsetWidth;
        const cardLeft = activeCard.offsetLeft;
        const scrollTo = cardLeft - (navWidth/2) + (cardWidth/2);

        gsap.to(awardNav, {
            duration: 0.5,
            scrollLeft: scrollTo,
            ease: "power2.inOut"
        });
    }

    function changeCard(card) {
        const lastCard = document.querySelector('.award-box.active');
        lastCard.classList.remove('active');
        card.classList.add('active');
        centerCard();
    }
    
    //EVENT LISTENERS
    allCards.forEach(card => {
        card.addEventListener('click', () => changeCard(card));
    });
    
    window.addEventListener('load', centerCard);
    window.addEventListener('resize', centerCard);
}
