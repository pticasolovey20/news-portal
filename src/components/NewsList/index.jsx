import React from 'react';

import { NewsItem } from './components/NewsItem';

import styles from './NewsList.module.scss';

const NewsList = ({ list }) => {
	return (
		<div className={styles.newsList}>
			{list.map(news => (
				<NewsItem key={news.id} item={news} />
			))}
		</div>
	);
};

export { NewsList };
