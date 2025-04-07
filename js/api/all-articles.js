export function getAllArticles() {
    const allArticles = Vue.createApp({
        created() {
            fetch('http://localhost:8888/FiveAlive_client_project/backend/public/articles')
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
                error: null,
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
                const totalPages = Math.ceil(this.articles.length / this.articlesPerPage);
                return totalPages
            }
        },
        methods: {
            goToPage(page) {
                this.currentPage = page;
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: '#news-articles-app',
                        offsetY: 100
                    },
                    ease: "power2.inOut"
                });
            }
        },
    }).mount('#news-articles-app');

    return allArticles;
}