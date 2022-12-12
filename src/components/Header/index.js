import React from 'react';

import { Link } from 'react-router-dom';

import { routeMain as routeMainPage } from '../../pages/MainPage';
import { routeMain as routeNewsListPage } from '../../pages/NewsListPage';
import { routeMain as routeContacts } from '../../pages/Contacts';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.title}>NEWS</div>
            <nav>
                <Link to={routeMainPage()}>Home</Link>
                <Link to={routeNewsListPage()}>News</Link>
                <Link to={routeContacts()}>Contacts</Link>
            </nav>
        </header>
    );
};

export default Header;
