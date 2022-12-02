import React from 'react';

import './styles.scss';

import NewsItem from './components/NewsItem';

const NewsList = props => {
    return (
        <div className="newsList">
            {props.list.map((news, index) => (
                <NewsItem key={index} item={news} />
            ))}
        </div>
    );
};

export default NewsList;
