export function hideBubble() {
    
    const bubble = document.querySelector('#donation-bubble');

    bubble.addEventListener('click', () => {
        bubble.classList.add('hidden');
    });

}
