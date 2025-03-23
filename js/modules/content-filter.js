export function contentFilter() {
    //VARIABLES
    const filterButtons = document.querySelectorAll('#filter-bar button');
    const filterGroups = document.querySelectorAll('.filter-content');

    //FUNCTIONS
    function filterContent(e) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterGroups.forEach(group => group.classList.remove('active'));
        
        e.classList.add('active');
        
        const type = e.dataset.type;
        const selectedGroup = document.querySelector(`.filter-content[data-type="${type}"]`);
        if (selectedGroup) selectedGroup.classList.add('active');
    }

    //EVENT LISTENERS
    filterButtons.forEach(button => {
        button.addEventListener('click', () => filterContent(button));
    });

}
