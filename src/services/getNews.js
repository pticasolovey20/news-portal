import axios from 'axios';

export const getNews = async () => {
	const requestUrl = 'https://63891094d94a7e5040ad939a.mockapi.io/news';
	const response = await axios.get(requestUrl);
	return response;
};
