export function getLatestArticles() {
    const latestArticles = Vue.createApp({
        created() {
            this.getArticles();
        },

        data() {
            return {
                articles: [],
                loading: true,
                error: ''
            }
        },

        methods: {
            formatDate(date) {
                return new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'UTC'
                });
            },

            getArticles() {
                fetch('http://localhost:8888/FiveAlive_client_project/backend/public/articles/latest')
                    .then(response => response.json())
                    .then(data => {
                        this.articles = [];
                        data.articles.forEach(articleData => {
                            const article = {
                                id: articleData.id,
                                title: articleData.title,
                                content: articleData.content,
                                image_main: articleData.image_main,
                                type: articleData.type,
                                card_content: articleData.card_content,
                                published_date: this.formatDate(articleData.published_date)
                            };
                            this.articles.push(article);
                        });
                        this.loading = false;
                    })
                    .catch(error => {
                        console.error(error);
                        this.error = 'Failed to load articles';
                        this.loading = false;
                    });
            }
        }
    }).mount('#articles');

    return latestArticles;
}