export function getNewsArticle() {
    const article = Vue.createApp({
        created() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            this.getArticle(id);
            this.getRelatedArticles();
        },

        data() {
            return {
                article: {
                    id: null,
                    title: '',
                    content: '',
                    image_main: '',
                    published_date: '',
                    card_content: ''
                },
                relatedArticles: [],
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

            getArticle(id) {
                this.loading = true;
                this.error = '';
                
                fetch(`http://localhost:8888/FiveAlive_client_project/backend/public/news/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.length > 0) {
                            const articleData = data[0];
                            this.article.id = articleData.id;
                            this.article.title = articleData.title;
                            this.article.content = articleData.content;
                            this.article.image_main = articleData.image_main;
                            this.article.published_date = this.formatDate(articleData.published_date);
                            this.article.card_content = articleData.card_content;

                            document.title = `BIA | ${this.article.title}`;
                            const pageHeader = document.querySelector('.page-header');
                            pageHeader.textContent = this.article.title;

                        } else {
                            this.error = 'Article not found';
                        }
                        this.loading = false;
                    })
                    .catch(error => {
                        console.error(error);
                        this.error = 'Failed to load article';
                        this.loading = false;
                    });
            },

            getRelatedArticles() {
                fetch('http://localhost:8888/FiveAlive_client_project/backend/public/articles/latest-news')
                    .then(response => response.json())
                    .then(data => {
                        this.relatedArticles = []
                        data.articles
                            .filter(a => a.id !== this.article.id)
                            .slice(0, 3)                        
                            .forEach(articleData => {
                                this.relatedArticles.push({
                                    id:            articleData.id,
                                    title:         articleData.title,
                                    card_content:  articleData.card_content,
                                    image_main:    articleData.image_main,
                                    type:          articleData.type,
                                    published_date:this.formatDate(articleData.published_date)
                                })
                            })
                    })
                    .catch(error => {
                        console.error(error);
                        this.error = 'Failed to load related articles';
                    });
            }
        }
    }).mount('#article-section');

    return article;
}