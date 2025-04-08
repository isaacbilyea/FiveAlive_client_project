export function getNewsArticle() {
    const article = Vue.createApp({
        created() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            
            fetch(`http://localhost:8888/FiveAlive_client_project/backend/public/news/${id}`)
                .then(response => response.json())
                .then(data => {
                    const articleData = data[0];
                    
                    if (!articleData) {
                        throw new Error('Article not found');
                    }

                    const published_date = new Date(articleData.published_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    
                    this.article = {
                        ...articleData,
                        published_date
                    };
                    this.loading = false;
                })
                .catch(error => {
                    this.error = "Failed to load article";
                    this.loading = false;
                });
        },

        data() {
            return {
                article: null,
                loading: true,
                error: null
            }
        }
    }).mount('#article-section');

    return article;
}