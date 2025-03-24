export function gsapSections() {
    gsap.registerPlugin(ScrollTrigger);
    
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        gsap.from(section, {
            y: 25,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}