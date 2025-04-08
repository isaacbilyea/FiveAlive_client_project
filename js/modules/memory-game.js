export function memoryGame() {
    const app = Vue.createApp({
        data() {
            return {
                cards: [
                    { pair: 'card1', flipped: false, matched: false, image: 'images/card-1.png' },
                    { pair: 'card1', flipped: false, matched: false, image: 'images/card-1.png' },
                    { pair: 'card2', flipped: false, matched: false, image: 'images/card-2.png' },
                    { pair: 'card2', flipped: false, matched: false, image: 'images/card-2.png' },
                    { pair: 'card3', flipped: false, matched: false, image: 'images/card-3.png' },
                    { pair: 'card3', flipped: false, matched: false, image: 'images/card-3.png' },
                    { pair: 'card4', flipped: false, matched: false, image: 'images/card-4.png' },
                    { pair: 'card4', flipped: false, matched: false, image: 'images/card-4.png' },
                    { pair: 'card5', flipped: false, matched: false, image: 'images/card-5.png' },
                    { pair: 'card5', flipped: false, matched: false, image: 'images/card-5.png' },
                    { pair: 'card6', flipped: false, matched: false, image: 'images/card-6.png' },
                    { pair: 'card6', flipped: false, matched: false, image: 'images/card-6.png' }
                ],
                firstCard: null,
                canFlip: true,
                matchCount: 0,
                showCounter: false,
                gameComplete: false,
                facts: [
                    "Did you know over 1.3 million Indian soldiers served in World War I, making it one of the largest contributions from any country?",
                    "Did you know Indian troops fought in major battles including Ypres, Somme, Gallipoli, and Mesopotamia?",
                    "Did you know 74,000 Indian soldiers died in World War I, with thousands more wounded or taken prisoner?",
                    "Did you know Indian soldiers earned 11 Victoria Crosses, Britain's highest military decoration, for their bravery during WWI?",
                    "Did you know the Indian Army included soldiers from diverse backgrounds, religions, and regions across the subcontinent?",
                    "Did you know many Indian soldiers kept diaries and wrote letters describing their experiences, providing valuable historical records?"
                ],
                currentFactIndex: 0,
                currentFact: "",
                confettiSrc: 'images/game-confetti.gif',
                showConfetti: false
            }
        },
        methods: {
            flipCard(card) {

                if(this.canFlip === false) {
                    return;
                }

                if(card.flipped === true) {
                    return;
                }

                card.flipped = true;

                if(this.firstCard === null) {
                    this.firstCard = card;
                    return;
                }

                this.canFlip = false;

                let cardsMatch = this.firstCard.pair === card.pair;

                if(cardsMatch === true) {
                    setTimeout(() => {
                        card.matched = true;
                        this.firstCard.matched = true;
                        this.firstCard = null;
                        this.canFlip = true;
                        this.matchCount++;
                        this.animateCounter();
                        this.checkGameComplete();
                    }, 1000);
                } 
                else {     
                    setTimeout(() => {
                        card.flipped = false;
                        this.firstCard.flipped = false;
                        this.firstCard = null;
                        this.canFlip = true;
                    }, 1000);
                }
            },
            shuffle() {
                this.cards.sort(() => Math.random() - 0.5);
            },
            animateCounter() {
                gsap.killTweensOf("#match-counter");
                
                this.showCounter = true;
                gsap.fromTo("#match-counter", 
                    { scale: 0, opacity: 0 },
                    { 
                        scale: 1, 
                        opacity: 1, 
                        duration: 0.5, 
                        ease: "back.out" 
                    }
                );
                gsap.to("#match-counter", {
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    delay: 2,
                    onComplete: () => {
                        this.showCounter = false;
                    }
                });
            },
            checkGameComplete() {
                if (this.matchCount === 6) {
                    setTimeout(() => {
                        this.gameComplete = true;
                        this.currentFact = this.getNextFact();
                        this.confettiSrc = `images/game-confetti.gif?v=${this.currentFactIndex}`;
                        this.showConfetti = true;
                        this.animatePopup();
                    }, 500);
                }
            },
            animatePopup() {
                gsap.fromTo("#game-complete-popup", 
                    { scale: 0, opacity: 0 },
                    { 
                        scale: 1, 
                        opacity: 1, 
                        duration: 0.7, 
                        ease: "elastic.out(1, 0.5)"
                    }
                );
            },
            resetGame() {
                this.showConfetti = false;
                this.gameComplete = false;
                this.cards.forEach(card => {
                    card.flipped = false;
                    card.matched = false;
                });
                this.shuffle();
                this.matchCount = 0;
                this.firstCard = null;
                this.canFlip = true;
            },
            getNextFact() {
                const fact = this.facts[this.currentFactIndex];
                
                this.currentFactIndex = (this.currentFactIndex + 1) % this.facts.length;
                
                return fact;
            },
        },
        mounted() {
            this.shuffle();
        }
    }).mount("#memory-game-wrapper");

    return app;
}