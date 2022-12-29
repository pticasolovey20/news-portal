import { Routes, Route } from 'react-router-dom';

import { Header } from '../Header';
import { MainPage, routeMain as routeMainPage } from '../../pages/MainPage';
import { NewsListPage, routeMain as routeNewsListPage } from '../../pages/NewsListPage';
import { NewsDetail } from '../../pages/NewsDetail';
import { Contacts, routeMain as routeContacts } from '../../pages/Contacts';
import { Footer } from '../Footer';

import styles from './AppContent.module.scss';

const AppContent = () => {
	return (
		<div className={styles.mainWrapper}>
			<Header />
			<main>
				<Routes>
					<Route path={routeMainPage()} element={<MainPage />} />
					<Route path={routeNewsListPage()} element={<NewsListPage />} />
					<Route path="/:newsList/:id" element={<NewsDetail />} />
					<Route path={routeContacts()} element={<Contacts />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default AppContent;
