import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.mainFooter}>
			<div className={styles.description}>
				<div className={styles.big}>NEWS</div>
				<div className={styles.small}>Single Page Application</div>
			</div>
			<div className={styles.graduationTitle}>Diploma project</div>
			<div className={styles.small}>
				<div className={styles.big}>Made by</div>Dmytro Solovyov
			</div>
		</footer>
	);
};

export { Footer };
