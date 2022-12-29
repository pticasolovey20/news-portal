import { getNews } from '../../services/getNews';

export const setNewsActions = payload => {
	return {
		type: 'news/setNews',
		payload,
	};
};

export const loadNews = () => async dispatch => {
	try {
		const { data } = await getNews();
		dispatch(setNewsActions(data));
	} catch (error) {
		alert('an error occurred:', error);
	}
};
