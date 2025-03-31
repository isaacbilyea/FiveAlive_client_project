export function centerCards() {

    //VARIABLES
    const partners = document.querySelector('#partners');
    const newsArticles = document.querySelector('#news-con.home-news #articles');
    
    //FUNCTIONS
    function centerContainer(container) {
        
        const middleCard = container.children[Math.floor(container.children.length / 2)];
        const scrollTo = middleCard.offsetLeft - (container.offsetWidth/2) + (middleCard.offsetWidth/2);
            
        container.scrollTo({
            left: scrollTo,
            behavior: 'smooth'
        });
    }
    
    //EVENT LISTENERS
    window.addEventListener('resize', centerContainer(partners));
    window.addEventListener('resize', centerContainer(newsArticles));
    window.addEventListener('load', centerContainer(partners));
    window.addEventListener('load', centerContainer(newsArticles));

}