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


(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const timelineItems = gsap.utils.toArray('.timeline-item');
    const progress = document.querySelector('#timeline-progress');
    const timeline = document.querySelector('#timeline');
  
    timelineItems.forEach((item, index) => {
        const dot = item.querySelector('.timeline-dot');
        const text = item.querySelector('.timeline-text');
        
        gsap.set(dot, { y: 0 });
        
        const stopPoint = () => {
            const nextItem = timelineItems[index + 1];
            if (nextItem) {
                const nextDot = nextItem.querySelector('.timeline-dot');
                return nextDot.getBoundingClientRect().top - dot.getBoundingClientRect().top - 48;
            }
            return item.offsetHeight - 40;
        };

        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                onUpdate: (self) => {
                    if (self.isActive) {
                        const maxMove = stopPoint();
                        const moveY = Math.min(self.progress * maxMove, maxMove);
                        
                        const dotRect = dot.getBoundingClientRect();
                        const timelineRect = timeline.getBoundingClientRect();
                        const currentDotCenter = dotRect.top + (dotRect.height / 2) + moveY;
                        const progressHeight = currentDotCenter - timelineRect.top;
                        
                        progress.style.height = `${progressHeight}px`;

                        gsap.to(dot, {
                            y: moveY,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                        
                        gsap.to(text, {
                            y: moveY,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                }
            }
        });
    });
})();