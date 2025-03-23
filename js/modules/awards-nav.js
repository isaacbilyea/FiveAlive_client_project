export function awardsNav() {
    gsap.registerPlugin(ScrollTrigger);
    
    const awardNav = document.querySelector('#award-navigation');
    const awardsInfo = document.querySelector('#awards-info');
    const allCards = document.querySelectorAll('.award-box');
    const soldierName = document.querySelector('#soldier-name');
    const regiment = document.querySelector('#regiment');
    const description = document.querySelector('#award-description');
    const medalImg = document.querySelector('#medal-image');
    const soldierImg = document.querySelector('.soldier-img img');
    const awardTitle = document.querySelector('.award-column h3');
    
    function updateContent(card) {
        const name = card.querySelector('.soldier-name').textContent;
        const cardRegiment = card.querySelector('.regiment').textContent;
        const cardImage = card.querySelector('.award-image img').src;

        const awardContent = {
            'victoria-cross': {
                title: 'Victoria Cross Recipient',
                description: 'The Victoria Cross is awarded to individuals as the highest military honour for extraordinary bravery and valour in the face of the enemy.',
                image: 'victoria-cross.png'
            },
            'flying-cross': {
                title: 'Flying Cross Recipient',
                description: 'The Distinguished Flying Cross is awarded to aviators as the highest aerial combat honour for their extraordinary skill and valour in the skies during World War One.',
                image: 'flying-ace.png'
            },
            'flying-ace': {
                title: 'Flying Ace',
                description: 'The Flying Ace designation is awarded to fighter pilots who demonstrate exceptional aerial combat prowess by achieving five or more enemy aircraft kills during World War One.',
                image: 'flying-ace.png'
            }
        };

        let awardType = "";
        if (card.classList.contains('flying-cross')){
            awardType = 'flying-cross';
        } else if (card.classList.contains('flying-ace')) {
            awardType = 'flying-ace';
        } else {
            awardType = 'victoria-cross';
        }
        
        const content = awardContent[awardType];
        
        gsap.to(awardsInfo, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                soldierName.textContent = name;
                regiment.textContent = cardRegiment;
                description.textContent = content.description;
                awardTitle.textContent = content.title;
                medalImg.src = `images/${content.image}`;
                soldierImg.src = cardImage;

                gsap.to(awardsInfo, {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }
        });
    }

    function centerCard(card) {
        const navWidth = awardNav.offsetWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;
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
        centerCard(card);
        updateContent(card);
    }
    
    allCards.forEach(card => {
        card.addEventListener('click', () => changeCard(card));
    });
    
    const firstCard = document.querySelector('.award-box');
    updateContent(firstCard);
    centerCard(firstCard);
}
