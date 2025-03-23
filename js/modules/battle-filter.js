export function battleFilter() {
    //VARIABLES
    const filterButtons = document.querySelectorAll('#filter-bar button');
    const battleGroups = document.querySelectorAll('.battle-group');

    //FUNCTIONS
    function filterBattles(e) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        battleGroups.forEach(group => group.classList.remove('active'));
        
        e.classList.add('active');
        
        const campaign = e.dataset.campaign;
        const selectedGroup = document.querySelector(`.battle-group[data-campaign="${campaign}"]`);
        selectedGroup.classList.add('active');
    }

    //EVENT LISTENERS
    filterButtons.forEach(button => {
        button.addEventListener('click', () => filterBattles(button));
    });
}
