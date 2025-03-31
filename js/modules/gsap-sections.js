export function gsapSections() {
    gsap.registerPlugin(ScrollTrigger);
    
    const sections = document.querySelectorAll('section:not(.subpage-hero-section):not(.no-animation)');

    sections.forEach(section => {

        const elements = section.querySelectorAll(':scope > *:not(.no-animation)');
        
        gsap.from(elements, {
            y: 25,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

}