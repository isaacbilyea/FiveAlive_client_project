export function donationCounter() {
    gsap.registerPlugin(ScrollTrigger);
    
    const stats = document.querySelectorAll('#donation-stats-con span');
    
    stats.forEach(stat => {
        const number = stat.dataset.value;
        const prefix = stat.dataset.prefix;
        const suffix = stat.dataset.suffix;
        
        gsap.to({value: 0}, {
            value: number,
            duration: 2,
            scrollTrigger: {
                trigger: '#donation-stats',
                start: "top 80%",
            },
            onUpdate: function() {
                const displayNumber = Math.round(this.targets()[0].value);
                stat.innerText = prefix + displayNumber.toLocaleString() + suffix;
            }
        });
    });
}