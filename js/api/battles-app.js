export function battlesApp() {
    const battles = Vue.createApp({
        created() {
            const urlParams = new URLSearchParams(window.location.search);
            const battleId = urlParams.get('id') || 1;
            this.id = urlParams.get('id');
            this.getBattle(battleId);
        },

        data() {
            return {
                id: null,
                battle: {
                    title: '',
                    year: ''
                },
                battleSections: [],
                loading: true,
                error: ''
            }
        },
        methods: {
            getBattle(id) {
                this.loading = true;
                this.error = '';

                fetch(`http://localhost:8888/FiveAlive_client_project/backend/public/battles/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.length > 0) {
                            const battleData = data[0];
                            this.battle.title = battleData.title;
                            this.battle.year = battleData.year;

                            document.title = `BIA | ${this.battle.title}`;
                            const heroHeader = document.querySelector('.hero-header');
                            heroHeader.textContent = this.battle.title;
                            
                            this.battleSections = [];
                            data.forEach(sectionData => {
                                const images = sectionData.image.split(',');
                                
                                const section = {
                                    heading: sectionData.heading,
                                    description: sectionData.description,
                                    images,
                                    index: sectionData.index
                                };
                                this.battleSections.push(section);
                            });
                        } else {
                            this.error = 'Battle not found';
                        }
                        this.loading = false;
                    })
                    .catch(error => {
                        console.error(error);
                        this.error = 'Failed to load battle data';
                        this.loading = false;
                    });
            }
        }
    }).mount('#battles-app');

    return battles;
}