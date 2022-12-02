import React, { useEffect, useState } from 'react';
import './styles.scss';
import routeMain from './routes';

import PageTitle from 'components/PageTitle';

import NewsList from 'components/NewsList';

import getNews from 'components/services/getNews';

const MainPage = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews().then(response => {
            setNewsList(response.data.articles);
        });
    }, []);

    return (
        <section className="mainPage">
            <PageTitle
                title={
                    <h2>
                        Always <br /> <span>up-to-date</span>
                    </h2>
                }
            />
            {newsList.length > 0 && <NewsList list={newsList.slice(0, 6)} />}
        </section>
    );
};

export { routeMain };

export default MainPage;
