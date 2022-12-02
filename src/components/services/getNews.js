import axios from 'axios';

const getNews = () => {
    const options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
        headers: {
            'x-api-key': 'naHB2iOejO2N-72yH4R-HJ-svfXvELob-HzCSSE55mk',
        },
    };

    return axios.request(options);
};

export default getNews;
