export function imageChanger(type) {
    //VARIABLES
    const battleImages = [
        'images/1_OtherWarsSelection.jpg',
        'images/2_OtherWarsSelection.jpg',
        'images/3_OtherWarsSelection.jpg',
        'images/4_OtherWarsSelection.png',
        'images/5_OtherWarsSelection.jpg',
        'images/6_OtherWarsSelection.jpg',
        'images/7_OtherWarsSelection.jpg',
    ];

    const regimentImages = [
        'images/1_Regiment_Selection.jpg',
        'images/2_Regiment_Selection.jpg',
        'images/3_Regiment_Selection.jpg',
        'images/4_Regiment_Selection.jpg',
        'images/5_Regiment_Selection.jpg',
        'images/6_Regiment_Selection.jpg',
        'images/7_Regiment_Selection.jpg',
        'images/8_Regiment_Selection.png',
        'images/9_Regiment_Selection.jpg'
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