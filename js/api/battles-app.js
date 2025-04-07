export function battlesApp() {
    const app = Vue.createApp({
        created() {
            const urlParams = new URLSearchParams(window.location.search);
            const battleId = urlParams.get('id') || 1;
            this.getBattle(battleId);
        },
        data() {
            return {
                battle: {
                    title: "",
                    year: ""
                },
                battleSections: [],
                errors: "",
                loading: true
            }
        },
        methods: {
            getBattle(id) {
                this.loading = true;
                this.errors = "";

                fetch(`http://localhost:8888/FiveAlive_client_project/backend/public/battles/${id}`)
                .then(response => response.json())
                .then(data => {
                    const battleData = data[0];
                    this.battle.title = battleData.title;
                    this.battle.year = battleData.year;

                    document.title = `BIA | ${this.battle.title}`;
                    const heroHeader = document.querySelector('.hero-header');
                    heroHeader.textContent = this.battle.title;

                    data.forEach((section, index) => {
                        let images = [];
                        
                        if(section.image) {
                            const imageArray = section.image.split(',');
                            images = imageArray.map(img => img.trim());
                        }

                        this.battleSections.push({
                            heading: section.heading,
                            description: section.description,
                            images,
                            index
                        });
                    });
                    this.loading = false;
                })
                .catch(error => {
                    console.error('Error:', error);
                    this.errors = "Error loading battle data";
                    this.loading = false;
                });
            }
        }
    }).mount('#battles-app');

    return app;
}