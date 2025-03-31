export function timeline() {

    gsap.registerPlugin(ScrollTrigger);
    
    //VARIABLES
    const timeline = document.querySelector('#timeline');
    const progress = document.querySelector('#timeline-progress');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineHeader = document.querySelector('.timeline-header');

    //GSAP
    gsap.from(timelineHeader, {
        y: 25,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: timelineHeader,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.to(progress, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: timeline,
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }
    });

    timelineItems.forEach((item) => {
        const dot = item.querySelector('.timeline-dot');
        const content = item.querySelectorAll('.timeline-content div');

        ScrollTrigger.create({
            trigger: dot,
            start: 'center center',
            onEnter: () => {
                gsap.to(content, {
                    opacity: 1,
                    x: 0,
                    duration: 0.1,
                    stagger: 0.1
                });
                item.classList.add('active');
            },
            onLeaveBack: () => {
                gsap.to(content, {
                    opacity: 0,
                    x: 0,
                    duration: 0.1,
                    stagger: 0.1
                });
                item.classList.remove('active');
            }
        });
    });
}