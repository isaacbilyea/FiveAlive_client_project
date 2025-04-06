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
                showCounter: false
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
            }
        },
        mounted() {
            this.shuffle();
        }
    }).mount("#memory-game-wrapper");

    return app;
}