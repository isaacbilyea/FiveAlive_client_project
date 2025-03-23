export function donationCounter() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(TextPlugin);
    
    // Get all counter elements
    const counters = document.querySelectorAll('#donation-stats-con span');
    
    counters.forEach(counter => {
        const startText = counter.textContent;
        const endNumber = parseInt(startText.replace(/\D/g, ''));
        
        // Animate counter
        gsap.to(counter, {
            textContent: endNumber,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: '#donation-stats',
                start: "top 80%",
                once: true
            },
            onUpdate: () => {
                let currentNumber = Math.round(counter.textContent);
                let formatted = currentNumber.toLocaleString();
                
                if (startText.includes('$')) formatted = '$' + formatted;
                if (startText.includes('+')) formatted = formatted + '+';
                
                counter.textContent = formatted;
            }
        });
    });
}