export function getLatestArticles() {
    const latestArticles = Vue.createApp({
        created() {
            fetch('http://localhost:8888/FiveAlive_client_project/backend/public/articles/latest')
                .then(response => response.json())
                .then(data => {
                    data.articles.forEach(article => {
                        article.published_date = new Date(article.published_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        });
                    });
                    this.articles = data.articles;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.error = "Failed to load articles";
                    this.loading = false;
                });
        },
        data() {
            return {
                articles: [],
                loading: true,
                error: null
            }
        }
    }).mount('#articles');

    return latestArticles;
}