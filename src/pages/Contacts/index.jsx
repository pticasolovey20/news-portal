import routeMain from './routes';
import styles from './Contacts.module.scss';

const Contacts = () => {
	return (
		<section className={styles.contactsPage}>
			<div className={styles.info}>
				<div className={styles.name}>Dmytro Solovyov</div>
				<div className={styles.phone}>
					<a href="tel:+380661234">+38 (066) 12 34</a>
				</div>
				<div className={styles.mail}>
					<a href="mailto:dy.yev.solovyov@gmail.com">dy.yev.solovyov@gmail.com</a>
				</div>
				<div className={styles.position}>FrontEnd Developer</div>
				<div className={styles.technologies}>HTML5, CSS3, JS, TS, React</div>
			</div>
		</section>
	);
};

export { Contacts };
export { routeMain };
