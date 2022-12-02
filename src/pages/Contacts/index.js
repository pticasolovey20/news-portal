import React from 'react';
import './styles.scss';
import routeMain from './routes';

import Image from 'assets/img/image.jpg';

const Contacts = () => {
    return (
        <section className="contactsPage">
            <div className="info">
                <div className="phone">
                    <a href="tel:+380661234">+38 (066) 12 34</a>
                </div>
                <div className="name">
                    Dmytro <br /> Solovyov
                </div>
                <div className="mail">
                    <a href="mailto:dy.yev.solovyov@gmail.com">dy.yev.solovyov@gmail.com</a>
                </div>
                <div className="position">FrontEnd Developer</div>
                <div className="technologies">HTML5, CSS3, JS, TS, React</div>
            </div>
            <div className="image">
                <img src={Image} alt={Image} />
            </div>
        </section>
    );
};

export { routeMain };

export default Contacts;
