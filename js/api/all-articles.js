export function getAllArticles() {
    const allArticles = Vue.createApp({
        created() {
            this.getArticles();
        },

        data() {
            return {
                articles: [],
                loading: true,
                error: '',
                currentPage: 1,
                articlesPerPage: 6
            }
        },

        computed: {
            pageArticles() {
                const start = (this.currentPage - 1) * this.articlesPerPage;
                const end = start + this.articlesPerPage;
                return this.articles.slice(start, end);
            },
            
            totalPages() {
                return Math.ceil(this.articles.length / this.articlesPerPage);
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
                fetch('http://localhost:8888/FiveAlive_client_project/backend/public/articles')
                    .then(response => response.json())
                    .then(data => {
                        this.articles = [];
                        data.articles.forEach(articleData => {
                            const article = {
                                id: articleData.id,
                                title: articleData.title,
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
            },

            changePage(page) {
                this.currentPage = page;
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: '#news-articles-app',
                        offsetY: 100
                    },
                    ease: 'power2.inOut'
                });
            }
        }
    }).mount('#news-articles-app');

    return allArticles;
}