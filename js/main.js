//Plyr - Video Player
(() => {
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        const player = new Plyr(video, {
            settings: [
                'play-large',
                'play',    
                'progress', 
                'current-time',
                'mute',     
                'volume',
                'fullscreen' 
            ]
        }); //Sets controls to remove defaults to get rid of settings
    });
})();


//----------------------------------------------------------------------------------//


//Timeline
(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const timeline = document.querySelector('#timeline');
    const progress = document.querySelector('#timeline-progress');
    const timelineItems = document.querySelectorAll('.timeline-item');

    //Progress bar
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

    //Dot triggers
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
})();


const password = "isaacisawesome";
const userPassword = prompt("Enter password to view this site:");
if (userPassword !== password) {
    document.body.innerHTML = "<h1>Access Denied</h1>";
}