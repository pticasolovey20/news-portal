import React from 'react';

import routeMain from './routes';

import Image from '../../assets/img/image.jpg';

import styles from './Contacts.module.scss';

const Contacts = () => {
    return (
        <section className={styles.contactsPage}>
            <div className={styles.info}>
                <div className={styles.phone}>
                    <a href="tel:+380661234">+38 (066) 12 34</a>
                </div>
                <div className={styles.name}>
                    Dmytro <br /> Solovyov
                </div>
                <div className={styles.mail}>
                    <a href="mailto:dy.yev.solovyov@gmail.com">dy.yev.solovyov@gmail.com</a>
                </div>
                <div className={styles.position}>FrontEnd Developer</div>
                <div className={styles.technologies}>HTML5, CSS3, JS, TS, React</div>
            </div>
            <div className={styles.image}>
                <img src={Image} alt={Image} />
            </div>
        </section>
    );
};

export { routeMain };

export { Contacts };
