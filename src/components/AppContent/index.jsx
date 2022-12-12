import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Header } from '../Header';
import { MainPage, routeMain as routeMainPage } from '../../pages/MainPage';
import { NewsListPage, routeMain as routeNewsListPage } from '../../pages/NewsListPage';
import { NewsDetail } from '../../pages/NewsDetail';
import { Contacts, routeMain as routeContacts } from '../../pages/Contacts';
import { Footer } from '../Footer';

import styles from './AppContent.module.scss';
import axios from 'axios';

export const PropsStorage = React.createContext({});

const AppContent = () => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://63891094d94a7e5040ad939a.mockapi.io/news');
            setNewsList(response.data);
        };
        fetchData();
    }, []);

    return (
        <PropsStorage.Provider value={{ newsList }}>
            <div className={styles.mainWrapper}>
                <Header />
                <main className={styles.main}>
                    <Routes>
                        <Route path={routeMainPage()} element={<MainPage />} />
                        <Route path={routeNewsListPage()} element={<NewsListPage />} />
                        <Route path="/:newsList/:id" element={<NewsDetail />} />
                        <Route path={routeContacts()} element={<Contacts />} />
                    </Routes>
                </main>
                <Footer className={styles.footer} />
            </div>
        </PropsStorage.Provider>
    );
};

export default AppContent;
