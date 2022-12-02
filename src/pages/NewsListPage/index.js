import React, { useEffect, useState } from 'react';
import './styles.scss';
import routeMain from './routes';

import PageTitle from 'components/PageTitle';

import NewsList from 'components/NewsList';

import getNews from 'components/services/getNews';

const NewsListPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles);
        });
    }, []);

    return (
        <section className="newsListPage">
            <PageTitle
                title={
                    <h2>
                        Stay <br /> <span>up-to-date</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList} />}
        </section>
    );
};

export { routeMain };

export default NewsListPage;
