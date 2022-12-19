import React, { useContext } from 'react';
import { PropsStorage } from '../../components/AppContent';

import { routeMain } from './routes';
import { PageTitle } from '../../components/PageTitle';
import { NewsList } from '../../components/NewsList';

const MainPage = () => {
	const { newsList } = useContext(PropsStorage);

	return (
		<section>
			<PageTitle
				title={
					<h2>
						Always <span>up-to-date</span>
					</h2>
				}
			/>
			{newsList.length > 0 && <NewsList list={newsList.slice(0, 6)} />}
		</section>
	);
};

export { routeMain };

export { MainPage };
