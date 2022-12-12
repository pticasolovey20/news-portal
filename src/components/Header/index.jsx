import React from 'react';

import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from '../../pages/MainPage';
import { routeMain as routeNewsListPage } from '../../pages/NewsListPage';
import { routeMain as routeContacts } from '../../pages/Contacts';

import styles from './Header.module.scss';

const setActive = ({ isActive }) => (isActive ? styles.activeLink : styles.link);

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className={styles.title}>NEWS</div>
            <nav>
                <NavLink className={setActive} to={routeMainPage()}>
                    Home
                </NavLink>
                <NavLink className={setActive} to={routeNewsListPage()}>
                    News
                </NavLink>
                <NavLink className={setActive} to={routeContacts()}>
                    Contacts
                </NavLink>
            </nav>
        </header>
    );
};

export { Header };
