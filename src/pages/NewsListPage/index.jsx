import React, { useContext } from 'react';
import { PropsStorage } from '../../components/AppContent';

import { routeMain } from './routes';
import { PageTitle } from '../../components/PageTitle';
import { NewsList } from '../../components/NewsList';

import styles from './NewsListPage.module.scss';

const NewsListPage = () => {
    const { newsList } = useContext(PropsStorage);

    return (
        <section className={styles.newsListPage}>
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

export { routeMain };

export { NewsListPage };
