export function getLatestEvent() {
    const latestEvent = Vue.createApp({
        created() {
            this.getEvent();
        },

        data() {
            return {
                event: {
                    id: '',
                    title: '',
                    published_date: '',
                    card_content: '',
                    image_main: ''
                },
                loading: true,
                error: ''
            }
        },

        methods: {

            getEvent() {
                fetch('http://localhost:8888/FiveAlive_client_project/backend/public/events/latest/event')
                    .then(response => response.json())
                    .then(data => {

                        this.event = {
                            id: data.id,
                            title: data.title,
                            card_content: data.card_content,
                            image_main: data.image_main
                        };

                        this.loading = false;
                    })
                    .catch(error => {
                        console.error(error);
                        this.error = "Failed to load featured event";
                        this.loading = false;
                    });
            }
        }
    }).mount('#featured-events-con');

    return latestEvent;
}