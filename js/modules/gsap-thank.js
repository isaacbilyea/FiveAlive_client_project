export function gsapThankyou() {
    const timeline = gsap.timeline();

    timeline.from("#thankyou", { 
        opacity: 0, 
        y: -50, 
        duration: 0.4, 
        ease: "power2.out" 
    });

    timeline.from(".info", {
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.4
    });

    timeline.from("hr", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.2
    });

    timeline.from("#thankyou-image", { 
        opacity: 0, 
        y: 50, 
        duration: 1,
        ease: "power3.out",
    }, "<");
}