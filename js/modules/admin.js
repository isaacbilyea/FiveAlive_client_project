const { createApp } = Vue;

export function adminNews() {
  createApp({
    data() {
      return {
        newsData: [],
      };
    },
    created() {
      fetch('http://localhost/bia_api/public/news')
        .then((response) => response.json())
        .then((data) => {
          this.newsData = data;
          console.log(this.newsData);
        })
        .catch((error) => console.error(error));
    },
  }).mount('#admin-news-list');
}

export function adminEvents() {
  createApp({
    data() {
      return {
        eventsData: [],
      };
    },
    created() {
      fetch('http://localhost/bia_api/public/events')
        .then((response) => response.json())
        .then((data) => {
          this.eventsData = data;
          console.log(this.eventsData);
        })
        .catch((error) => console.error(error));
    },
  }).mount('#admin-events-list');
}

export function adminVolunteers() {
  createApp({
    data() {
      return {
        volunteersData: [],
      };
    },
    created() {
      fetch('http://localhost/bia_api/public/volunteers')
        .then((response) => response.json())
        .then((data) => {
          this.volunteersData = data;
          console.log(this.volunteersData);
        })
        .catch((error) => console.error(error));
    },
  }).mount('#admin-volunteers-list');
}

export function adminDonors() {
  createApp({
    data() {
      return {
        donorsData: [],
      };
    },
    created() {
      fetch('http://localhost/bia_api/public/donors')
        .then((response) => response.json())
        .then((data) => {
          this.donorsData = data;
          console.log(this.donorsData);
        })
        .catch((error) => console.error(error));
    },
  }).mount('#admin-donors-list');
}

export function adminNewsletters() {
  createApp({
    data() {
      return {
        newslettersData: [],
      };
    },
    created() {
      fetch('http://localhost/bia_api/public/newsletters')
        .then((response) => response.json())
        .then((data) => {
          this.newslettersData = data;
          console.log(this.newslettersData);
        })
        .catch((error) => console.error(error));
    },
  }).mount('#admin-newsletters-list');
}
