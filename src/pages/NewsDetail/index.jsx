import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from '../../store/news/actions';
import { selectList } from '../../store/news/selectors';

import { routeMain } from './routes';

import styles from './NewsDetail.module.scss';

const NewsDetail = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const newsList = useSelector(selectList);

	useEffect(() => {
		dispatch(loadNews());
	}, [id, dispatch]);

	const news = newsList.find(item => item.id === id);

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>{news.title}</h2>
			<img className={styles.img} src={news.imgUrl} alt={news.imgUrl} />
			<p className={styles.content}>{news.content}</p>
		</div>
	);
};

export { NewsDetail };
export { routeMain };
