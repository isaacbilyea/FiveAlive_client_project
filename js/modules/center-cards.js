export function centerCards() {
    const containers = ['#partners', '#news-con.home-news #articles'];
    
    function centerMiddleCard(container) {
        const element = document.querySelector(container);
        if (!element) return;
        
        const middleCardIndex = Math.floor(element.children.length / 2);
        const middleCard = element.children[middleCardIndex];
        
        if (middleCard) {
            const containerWidth = element.offsetWidth;
            const cardWidth = middleCard.offsetWidth;
            const scrollPosition = (middleCard.offsetLeft + (cardWidth / 2)) - (containerWidth / 2);
            
            element.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }

    containers.forEach(container => {
        window.addEventListener('load', () => centerMiddleCard(container));
        window.addEventListener('resize', () => centerMiddleCard(container));
    });
}
