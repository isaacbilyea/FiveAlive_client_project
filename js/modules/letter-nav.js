export function letterNav() {

    //VARIABLES
    const letterNav = document.querySelector('#letter-navigation');
    const allCards = document.querySelectorAll('.letter-box');

    //FUNCTIONS
    function centerCard() {
        const activeCard = document.querySelector('.letter-box.active');
        const navWidth = letterNav.offsetWidth;
        const cardWidth = activeCard.offsetWidth;
        const cardLeft = activeCard.offsetLeft;
        const scrollTo = cardLeft - (navWidth/2) + (cardWidth/2);

        gsap.to(letterNav, {
            duration: 0.5,
            scrollLeft: scrollTo,
            ease: "power2.inOut"
        });
    }
    
    function changeCard(card) {
        const lastCard = document.querySelector('.letter-box.active');
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

