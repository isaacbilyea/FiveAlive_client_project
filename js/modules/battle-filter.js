export function battleFilter() {
    const filterButtons = document.querySelectorAll('#filter-bar button');
    const battleGroups = document.querySelectorAll('.battle-group');

    function filterBattles(clickedButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        battleGroups.forEach(group => group.classList.remove('active'));
        
        clickedButton.classList.add('active');
        
        const campaign = clickedButton.dataset.campaign;
        const selectedGroup = document.querySelector(`.battle-group[data-campaign="${campaign}"]`);
        if (selectedGroup) selectedGroup.classList.add('active');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => filterBattles(button));
    });

    // Initialize first battle group
    filterButtons[0].click();
}
