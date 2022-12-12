import React, { useState, useEffect } from 'react';

import routeMain from './routes';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import styles from './NewsDetail.module.scss';

const NewsDetail = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://63891094d94a7e5040ad939a.mockapi.io/news');
            setNews(response.data.find(item => item.id === id));
        };

        fetchData();
    }, [id]);

    return (
        news && (
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{news.title}</h2>
                <img className={styles.img} src={news.imgUrl} alt={news.imgUrl} />
                <p className={styles.content}>{news.content}</p>
            </div>
        )
    );
};

export { routeMain };

export default NewsDetail;
