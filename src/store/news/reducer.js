const initialState = {
	news: [],
};

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'news/setNews':
			return { ...state, news: [...action.payload] };

		default:
			return state;
	}
};
