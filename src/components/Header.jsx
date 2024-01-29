import styles from "./Header.module.css";

function Header() {
	return (
		<div className={styles.container}>
			<h1>Contact app</h1>
			<p>
				<a href="https://github.com/MehrabVosough/Contact/tree/main">Codes</a> |
				React.js
			</p>
		</div>
	);
}

export default Header;
