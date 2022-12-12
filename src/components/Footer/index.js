import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <div>
                <div>NEWS</div>
                <div className={styles.small}>Single Page Application</div>
            </div>
            <div className={styles.graduationTitle}>Diploma project</div>
            <div>
                <div className={styles.small}>Made by</div>Dmytro Solovyov
            </div>
        </footer>
    );
};

export default Footer;
