export function getNewsArticle() {
    const article = Vue.createApp({
        created() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            
            // Fetch current article
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

                    // After loading current article, fetch related news articles
                    this.fetchRelatedArticles();
                })
                .catch(error => {
                    this.error = "Failed to load article";
                    this.loading = false;
                });
        },

        data() {
            return {
                article: null,
                relatedArticles: [],
                loading: true,
                error: null
            }
        },

        methods: {
            fetchRelatedArticles() {
                fetch('http://localhost:8888/FiveAlive_client_project/backend/public/articles/latest-news')
                    .then(response => response.json())
                    .then(data => {
                        // Filter out the current article and format dates
                        const currentId = this.article.id;
                        this.relatedArticles = data.articles
                            .filter(article => article.id !== currentId)
                            .map(article => ({
                                ...article,
                                published_date: new Date(article.published_date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                            }));
                    })
                    .catch(error => {
                        console.error('Failed to load related articles:', error);
                    });
            }
        }
    }).mount('#article-section');

    return article;
}