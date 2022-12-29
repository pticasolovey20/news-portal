import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from '../../store/news/actions';
import { selectList } from '../../store/news/selectors';

import { PageTitle } from '../../components/PageTitle';
import { NewsList } from '../../components/NewsList';

import { routeMain } from './routes';

const NewsListPage = () => {
	const dispatch = useDispatch();
	const newsList = useSelector(selectList);

	useEffect(() => {
		dispatch(loadNews());
	}, [dispatch]);

	return (
		<section>
			<PageTitle
				title={
					<h2>
						Stay <span>up-to-date</span>
					</h2>
				}
			/>
			{newsList.length > 0 && <NewsList list={newsList} />}
		</section>
	);
};

export { NewsListPage };
export { routeMain };
