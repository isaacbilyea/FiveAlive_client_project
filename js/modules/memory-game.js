export function memoryGame() {
    gsap.registerPlugin(ScrollToPlugin);

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
                showConfetti: false,
                moves: 0,
                timer: 0,
                timerInterval: null,
                bestScore: '---',
                formatTime: '00:00',
                showWelcome: true,
            }
        },
        methods: {
            flipCard(card) {
                if(this.canFlip === false || card.flipped === true) {
                    return;
                }

                if (this.moves === 0) {
                    this.startTimer();
                }

                this.moves++;
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
                const randomValue = () => Math.random() - 0.5;
                const times = Math.floor(Math.random() * 3) + 2;
                
                for(let i = 0; i < times; i++) {
                    this.cards.sort(randomValue);
                }
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
                    clearInterval(this.timerInterval);

                    if (this.bestScore === '---' || this.moves < this.bestScore) {
                        this.bestScore = this.moves;
                    }

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
                clearInterval(this.timerInterval);
                this.timer = 0;
                this.moves = 0;
                this.formatTime = '00:00';
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
            startGame() {
                this.showWelcome = false;
                this.resetGame();
            },
            getNextFact() {
                const fact = this.facts[this.currentFactIndex];
                
                this.currentFactIndex = (this.currentFactIndex + 1) % this.facts.length;
                
                return fact;
            },
            startTimer() {
                this.timerInterval = setInterval(() => {
                    this.timer++;
                    this.formatTime = this.getFormattedTime();
                }, 1000);
            },
            getFormattedTime() {
                const minutes = Math.floor(this.timer / 60);
                const seconds = this.timer % 60;
                return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            },
            scrollToGame() {
                const gameWrapper = document.querySelector('#memory-game-wrapper');
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: "#memory-game-wrapper",
                        offsetY: window.innerHeight/2 - gameWrapper.offsetHeight/2,
                        autoKill: false
                    },
                    ease: "power2.inOut"
                });
            }
        },
        mounted() {
            this.shuffle();
            
            if (document.readyState === 'complete') {
                this.scrollToGame();
            } else {
                window.addEventListener('load', () => this.scrollToGame());
            }
        }
    }).mount("#memory-game-wrapper");

    return app;
}