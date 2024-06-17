import styles from "./Footer.module.css";

export const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <p>info@bihotz-studio.com</p>
      <p>+34 697 525 425</p>
      <a
        href="https://www.instagram.com/bihotz.studio/"
        target="_blank"
        rel="noopener"
      >
        Siguenos en <span className={styles.underlined}>Instagram</span>
      </a>
    </footer>
  );
};
