const API_BASE_URL = 'http://localhost:8888/FiveAlive_client_project/backend/public';

export default {
    /**
     * Get the latest articles (both news and events combined)
     * @returns {Promise} - A promise that resolves to an array of the 3 most recent articles
     */
    async getLatestArticles() {
        const response = await fetch(`${API_BASE_URL}/articles/latest`);
        const data = await response.json();
        
        if (!data.articles) {
            throw new Error('Failed to fetch latest articles');
        }
        return data.articles;
    },

    /**
     * Get the latest news articles
     * @returns {Promise} - A promise that resolves to an array of the 3 most recent news articles
     */
    async getLatestNews() {
        const response = await fetch(`${API_BASE_URL}/articles/latest-news`);
        const data = await response.json();
        
        if (!data.articles) {
            throw new Error('Failed to fetch latest news');
        }
        return data.articles;
    },

    /**
     * Get the latest events
     * @returns {Promise} - A promise that resolves to an array of the 3 most recent events
     */
    async getLatestEvents() {
        const response = await fetch(`${API_BASE_URL}/articles/latest-events`);
        const data = await response.json();
        
        if (!data.articles) {
            throw new Error('Failed to fetch latest events');
        }
        return data.articles;
    },

    /**
     * Get all articles (news and events combined)
     * @returns {Promise} - A promise that resolves to an array of all articles
     */
    async getAllArticles() {
        const response = await fetch(`${API_BASE_URL}/articles`);
        const data = await response.json();
        
        if (!data.articles) {
            throw new Error('Failed to fetch articles');
        }
        return data.articles;
    },

    /**
     * Get the article details
     * @param {string} type - The type of article ('news' or 'event')
     * @param {number} id - The article ID
     * @returns {Promise} - A promise that resolves to the article details
     */
    async getArticleDetails(type, id) {
        const endpoint = type === 'event' ? 'events' : 'news';
        const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`);
        const data = await response.json();
        
        if (!data || data.length === 0) {
            throw new Error(`${type} article not found`);
        }
        return data[0];
    }
};
