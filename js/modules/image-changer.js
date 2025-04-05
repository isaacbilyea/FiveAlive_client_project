export function imageChanger(type) {
    //VARIABLES
    const battleImages = [
        'images/more-battles-1.png',
        'images/more-battles-2.png',
        'images/more-battles-3.png'
    ];

    const regimentImages = [
        'images/regiments-1.png',
        'images/regiments-2.png',
        'images/regiments-3.png'
    ];

    const images = type === 'battle' ? battleImages : regimentImages;
    let currentIndex = 0;

    //FUNCTIONS
    function changeImage() {
        const imgs = document.querySelectorAll(`.${type}-image img`);
        currentIndex = (currentIndex + 1) % images.length;
        
        imgs.forEach(img => {
            gsap.to(img, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    img.src = images[currentIndex];
                    gsap.to(img, {
                        opacity: 1,
                        duration: 0.5
                    });
                }
            });
        });
    }

    setInterval(changeImage, 5000);
}