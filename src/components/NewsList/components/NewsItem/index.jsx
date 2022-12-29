import { Link } from 'react-router-dom';
import { routeMain as routeNewsDetail } from '../../../../pages/NewsDetail';

import { DateView } from '../../../DateView';
import { prepareText } from '../../../utils/prepareText';

import styles from './NewsItem.module.scss';

const NewsItem = ({ item }) => {
	return (
		<Link key={item.id} to={routeNewsDetail(item.id)}>
			<div className={styles.newsItem}>
				<div className={styles.title}>{prepareText(item.title)}</div>
				<img src={item.imgUrl} alt={item.imgUrl} />
				<DateView pubDate={item.pubDate} />
			</div>
		</Link>
	);
};

export { NewsItem };
