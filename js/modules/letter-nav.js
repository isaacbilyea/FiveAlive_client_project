import { letterData } from './letter-data.js';

export function letterNav() {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
    
    //VARIABLES
    const letterNav = document.querySelector('#letter-navigation');
    const allCards = document.querySelectorAll('.letter-box');
    const lettersContent = document.querySelector('#letters-con');
    const firstCard = document.querySelector('.letter-box');
    const soldierName = document.querySelector('#soldier-name');
    const letterTo = document.querySelector('#letter-to');
    const letterText = document.querySelector('#letter-text');
    const letterDate = document.querySelector('#letter-date');
    const letterSection = document.querySelector('#letters-section');

    //FUNCTIONS
    function updateContent(index) {

        const data = letterData[index];
        const tl = gsap.timeline();
        
        gsap.killTweensOf('#letter-text');
        gsap.killTweensOf('#letter-date');
        
        gsap.to(lettersContent, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {

                soldierName.textContent = data.from;
                letterTo.textContent = `To: ${data.to}`;
                
                letterText.textContent = '';
                letterDate.textContent = '';
                
                gsap.to(lettersContent, {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    onComplete: () => {

                        tl.to(letterText, {
                            duration: 2,
                            text: data.content,
                            ease: "none"
                        }).to(letterDate, {
                            duration: 0.5,
                            text: data.date,
                            ease: "none"
                        });
                    }
                });
            }
        });
    }

    function centerCard(card) {
        const navWidth = letterNav.offsetWidth;
        const cardWidth = card.offsetWidth;
        const cardLeft = card.offsetLeft;
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
        
        let index = 0;
        allCards.forEach((item, i) => {
            if (item === card) index = i;
        });
        
        centerCard(card);
        updateContent(index);
        
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#letters-section",
                offsetY: 150
            },
            ease: "power2.inOut"
        });
    }
        
    changeCard(firstCard);
    
    //EVENT LISTENERS
    allCards.forEach(card => {
        card.addEventListener('click', () => changeCard(card));
    });

    // Add stagger animation for cards
    gsap.set('.letter-box', { opacity: 0, y: 50 });
    
    ScrollTrigger.create({
        trigger: '#letter-navigation',
        start: 'top 80%',
        once: true,
        onEnter: () => {
            gsap.to('.letter-box', {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out'
            });
        }
    });

}

