export function getLatestEvent() {
    const app = Vue.createApp({
        created() {
            fetch('http://localhost:8888/FiveAlive_client_project/backend/public/events/latest-event')
                .then(response => response.json())
                .then(data => {
                    this.event = {
                        ...data,
                        published_date: new Date(data.published_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    };
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.error = "Failed to load featured event";
                    this.loading = false;
                });
        },
        data() {
            return {
                event: null,
                loading: true,
                error: null
            }
        }
    }).mount('#featured-events-con');

    return app;
}