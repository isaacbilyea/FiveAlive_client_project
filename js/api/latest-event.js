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
            formatDate(dateString) {
                return new Date(dateString).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                });
            },

            getEvent() {
                fetch('http://localhost:8888/FiveAlive_client_project/backend/public/events/latest-event')
                    .then(response => response.json())
                    .then(data => {
                        if (data > 0) {
                            const publishedDate = this.formatDate(data.published_date);

                            this.event = {
                                id: data.id,
                                title: data.title,
                                published_date: publishedDate,
                                card_content: data.card_content,
                                image_main: data.image_main
                            };
                        } else {
                            this.error = "No events found";
                        }
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