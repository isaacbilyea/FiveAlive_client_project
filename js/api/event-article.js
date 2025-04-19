export function getEventArticle() {
    const article = Vue.createApp({
        created() {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            this.getEvent(id);
            this.getRelatedEvents();

        },

        data() {
            return {
                article: {
                    id: null,
                    title: '',
                    content: '',
                    image_main: '',
                    location: '',
                    time: '',
                    event_date: '',
                    published_date: '',
                    gallery: []
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
            
            getEvent(id) {
                this.loading = true;
                this.error = '';
                
                fetch(`http://localhost:8888/FiveAlive_client_project/backend/public/events/${id}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.length > 0) {
                            const eventData = data[0];
                            this.article.id = eventData.id;
                            this.article.title = eventData.title;
                            this.article.content = eventData.content;
                            this.article.image_main = eventData.image_main;
                            this.article.location = eventData.location;
                            this.article.time = eventData.time;
                            this.article.event_date = this.formatDate(eventData.event_date);
                            this.article.published_date = this.formatDate(eventData.published_date);
                            
                            const images = eventData.gallery.split(',');
                            this.article.gallery = images.map(img => ({ 
                                image: img,
                                alt: eventData.title
                            }));
    
                            document.title = `BIA | ${this.article.title}`;
                            const pageHeader = document.querySelector('.page-header');
                            pageHeader.textContent = this.article.title;

                        } else {
                            this.error = 'Event not found';
                        }
                        this.loading = false;
                    })
                    .catch(error => {
                        console.error(error);
                        this.error = 'Failed to load event';
                        this.loading = false;
                    });
            },

            getRelatedEvents() {
                fetch('http://localhost:8888/FiveAlive_client_project/backend/public/articles/latest-events')
                    .then(response => response.json())
                    .then(data => {
                        this.relatedArticles = [];
                        data.articles
                            .filter(e => e.id !== this.article.id)  
                            .slice(0, 3)                        
                            .forEach(eventData => {
                                this.relatedArticles.push({
                                    id:             eventData.id,
                                    title:          eventData.title,
                                    card_content:   eventData.card_content,
                                    image_main:     eventData.image_main,
                                    type:           eventData.type,
                                    published_date: this.formatDate(eventData.published_date)
                                });
                            });
                    })
                    .catch(error => {
                        console.error(error);
                        this.error = 'Failed to load related events';
                    });
            }
        }
    }).mount('#article-section');

    return article;
}