export function awardsNav() {
    gsap.registerPlugin(ScrollTrigger);
    
    //VARIABLES
    const awardNav = document.querySelector('#award-navigation');
    const awardsInfo = document.querySelector('#awards-info');
    const allCards = document.querySelectorAll('.award-box');
    const soldierName = document.querySelector('#soldier-name');
    const regiment = document.querySelector('#regiment');
    const soldierRank = document.querySelector('#soldier-rank');
    const soldierLifespan = document.querySelector('#soldier-lifespan');
    const description = document.querySelector('#award-description');
    const medalImg = document.querySelector('#medal-image');
    const soldierImg = document.querySelector('.soldier-img img');
    const awardTitle = document.querySelector('.medal-info h3');
    const awardsSection = document.querySelector('#awards-section');

    //FUNCTIONS
    function updateContent(card) {
        const cardName = card.querySelector('.soldier-name').textContent;
        const cardRegiment = card.querySelector('.regiment').innerHTML;
        const cardRank = card.querySelector('.rank').innerHTML;
        const cardLifespan = card.querySelector('.lifespan').innerHTML;
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
                image: 'flying-cross.png'
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

        soldierName.textContent = cardName;
        regiment.innerHTML = cardRegiment;
        soldierRank.innerHTML = cardRank;
        soldierLifespan.innerHTML = cardLifespan;
        description.textContent = content.description;
        awardTitle.textContent = content.title;
        soldierImg.src = cardImage;
        

        const tl = gsap.timeline();

        medalImg.src = `images/${content.image}`;
            
        gsap.set(medalImg, { 
            transformOrigin: "top center",
            rotation: 0
        });
        

        tl.to(medalImg, {
            rotation: -8,
            duration: 0.20,
            ease: "power2.out"
        })
        .to(medalImg, {
            rotation: 8,
            duration: 0.35,
            ease: "power1.out"
        })
        .to(medalImg, {
            rotation: -4,
            duration: 0.3,
            ease: "power1.out"
        })
        .to(medalImg, {
            rotation: 2,
            duration: 0.25,
            ease: "power2.out"
        })
        .to(medalImg, {
            rotation: 0,
            duration: 0.2,
            ease: "power2.out"
        });
    }

    function centerCard(card) {
        const navWidth = awardNav.offsetWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;
        const scrollTo = cardLeft - (navWidth/2) + (cardWidth/2);

        gsap.to(awardNav, {
            duration: 0.4,
            scrollLeft: scrollTo,
            ease: "power2.inOut"
        });
    }
    
    function changeCard(card) {
        const activeCard = document.querySelector('.award-box.active');
        activeCard.classList.remove('active');
        
        card.classList.add('active');
        
        centerCard(card);
        updateContent(card);
        
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#awards-section",
                offsetY: window.innerHeight/2 - awardsSection.offsetHeight/2,
                autoKill: false
            },
            ease: "power2.inOut"
        });
    }

    //GSAP
    gsap.set('.award-box', { 
        opacity: 0, 
        y: 20
    });
        
    ScrollTrigger.create({
        trigger: '#award-navigation',
        start: 'top 80%',
        once: true,
        onEnter: () => {
            gsap.to('.award-box', {
                opacity: 1,
                y: 0,
                duration: 0.15,
                stagger: {
                    each: 0.15, 
                    from: "start" 
                },
                ease: "power1.out"
            });
        }
    });

    //EVENT LISTENERS
    allCards.forEach(card => {
        card.addEventListener('click', () => changeCard(card));
    });
}
