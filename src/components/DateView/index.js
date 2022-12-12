import React from 'react';

import prepareDate from '../utils/prepareDate';

import styles from './DateView.module.scss';

const DateView = ({ pubDate }) => {
    const { day, month } = prepareDate(pubDate);

    return (
        <p className={styles.dateView}>
            <span className={styles.day}>{day > 9 ? day : '0' + day}</span> /{' '}
            <span className={styles.month}>{month > 9 ? month : '0' + month}</span>
        </p>
    );
};

export default DateView;
