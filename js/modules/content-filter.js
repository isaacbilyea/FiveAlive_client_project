
export function contentFilter() {
    const filterButtons = document.querySelectorAll('#filter-bar button');
    const filterGroups = document.querySelectorAll('.filter-content');

    function filterContent(e) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterGroups.forEach(group => {
            group.classList.remove('active');
            group.style.display = 'none';
        });

        e.classList.add('active');

        const type = e.dataset.type;
        const selectedGroup = document.querySelector(`.filter-content[data-type="${type}"]`);

        selectedGroup.style.display = 'flex';
        selectedGroup.classList.add('active');

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: selectedGroup,
                offsetY: 150
            },
            ease: "power2.out"
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => filterContent(button));
    });
}
