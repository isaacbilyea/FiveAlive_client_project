export function gsapThankyou() {
    const timeline = gsap.timeline();

    timeline.from(".thankyou-text-intro", { 
        opacity: 0, 
        y: -50, 
        duration: 0.8, 
        ease: "power2.out" 
    });

    timeline.from(".info", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.4
    });

    timeline.from("hr", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2
    });

    timeline.from(".thankyou-image", { 
        opacity: 0, 
        y: 50, 
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out",
        onComplete: () => gsap.to(".thankyou-image", { filter: "blur(0px)", duration: 0.3 })
    });
}