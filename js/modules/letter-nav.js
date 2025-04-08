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
    const lettersSection = document.querySelector('#letters-section');
    const fullText = document.querySelector('#full-text');
    const dateSpacer = document.querySelector('#date-spacer');
    const soldierImage = document.querySelector('#soldier-image img');

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
                
                soldierImage.src = `images/${data.image}`;
                
                soldierName.textContent = data.from;
                letterTo.innerHTML = `<b>To:</b> ${data.to}`;
                
                fullText.textContent = data.content;
                dateSpacer.textContent = data.date;
                letterText.textContent = '';
                letterDate.textContent = '';
                
                gsap.to(lettersContent, {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    onComplete: () => {
                        const contentLength = data.content.length;
                        const typingDuration = contentLength * 0.02;

                        tl.to(letterText, {
                            duration: typingDuration,
                            text: data.content,
                            ease: "none"
                        }).to(letterDate, {
                            duration: 0.3,
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
        
        const index = card.dataset.index;
        
        centerCard(card);
        updateContent(index);
        
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#letters-section",
                offsetY: window.innerHeight/2 - lettersSection.offsetHeight/2,
                autoKill: false
            },
            ease: "power2.inOut"
        });
    }
        
    changeCard(firstCard);

    //GSAP
    gsap.set('.letter-box', { 
        opacity: 0, 
        y: 20
    });
        
    ScrollTrigger.create({
        trigger: '#letter-navigation',
        start: 'top 80%',
        once: true,
        onEnter: () => {
            gsap.to('.letter-box', {
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

