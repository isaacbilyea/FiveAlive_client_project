import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_URL || '/api';

export default {
  /**
   * Get the latest articles (both news and events combined)
   * @returns {Promise} - A promise that resolves to an array of the 3 most recent articles
   */
  getLatestArticles() {
    return axios.get(`${API_BASE_URL}/latest-articles`)
      .then(response => {
        if (response.data.success) {
          return response.data.articles;
        } else {
          throw new Error(response.data.message || 'Failed to fetch latest articles');
        }
      });
  },

  /**
   * Get the article details
   * @param {string} type - The type of article ('news' or 'event')
   * @param {number} id - The article ID
   * @returns {Promise} - A promise that resolves to the article details
   */
  getArticleDetails(type, id) {
    return axios.get(`${API_BASE_URL}/${type}/${id}`)
      .then(response => {
        if (response.data.success) {
          return response.data.article;
        } else {
          throw new Error(response.data.message || 'Failed to fetch article details');
        }
      });
  }
};
