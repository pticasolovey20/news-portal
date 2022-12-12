import React from 'react';

import styles from './PageTitle.module.scss';

const PageTitle = ({ title }) => {
    return <div className={styles.pageTitle}>{title}</div>;
};

export { PageTitle };
