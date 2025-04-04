export function memoryGame() {
    const app = Vue.createApp({
        data() {
            return {
                cards: [
                    { pair: 'card1', flipped: false, image: 'images/card1.png' },
                    { pair: 'card1', flipped: false, image: 'images/card1.png' },
                    { pair: 'card2', flipped: false, image: 'images/card2.png' },
                    { pair: 'card2', flipped: false, image: 'images/card2.png' },
                    { pair: 'card3', flipped: false, image: 'images/card3.png' },
                    { pair: 'card3', flipped: false, image: 'images/card3.png' },
                    { pair: 'card4', flipped: false, image: 'images/card4.png' },
                    { pair: 'card4', flipped: false, image: 'images/card4.png' },
                    { pair: 'card5', flipped: false, image: 'images/card5.png' },
                    { pair: 'card5', flipped: false, image: 'images/card5.png' },
                    { pair: 'card6', flipped: false, image: 'images/card6.png' },
                    { pair: 'card6', flipped: false, image: 'images/card6.png' }
                ],
                firstCard: null,
                canFlip: true
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
                    this.firstCard = null;
                    this.canFlip = true;
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
            }
        },
        mounted() {
            this.shuffle();
        }
    }).mount("#memory-game");

    return app;
}