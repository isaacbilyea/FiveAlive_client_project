export function donationCounter() {
    gsap.registerPlugin(ScrollTrigger);
    
    const stats = document.querySelectorAll('#donation-stats-con span');
    
    stats.forEach(stat => {
        const value = stat.innerText;
        const hasPrefix = value.includes('$');
        const hasSuffix = value.includes('+');
        const number = parseInt(value.replace(/\D/g, ''));
        const numberLength = number.toString().length;
        
        // Start with padded zeros matching final number length
        let current = Math.pow(10, numberLength - 1);
        if (current > number) current = Math.pow(10, numberLength - 2);

        // Set initial display
        let initialDisplay = current.toLocaleString();
        if (hasPrefix) initialDisplay = '$' + initialDisplay;
        if (hasSuffix) initialDisplay += '+';
        stat.innerText = initialDisplay;

        gsap.to({value: current}, {
            value: number,
            duration: 2,
            scrollTrigger: {
                trigger: '#donation-stats',
                start: "top 80%",
                once: true
            },
            onUpdate: function() {
                current = Math.round(this.targets()[0].value);
                let display = current.toLocaleString();
                if (hasPrefix) display = '$' + display;
                if (hasSuffix) display += '+';
                stat.innerText = display;
            }
        });
    });
}