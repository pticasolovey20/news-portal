import React from 'react';

import './styles.scss';

const NewsItem = props => {
    return (
        <div className="newsItem">
            <div className="title">{props.item.title}</div>
            <div className="bottomWrapper">
                <p className="author">{props.item.author}</p>
                <p>{props.item.published_date}</p>
            </div>
        </div>
    );
};

export default NewsItem;
