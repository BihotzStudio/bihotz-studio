import { getTranslations } from "@/utils/getTranslations";
import styles from "./Footer.module.css";

export const Footer = async ({ className, locale }) => {
  const t = await getTranslations(locale, "Footer");

  return (
    <footer className={className}>
      <p>info@bihotz-studio.com</p>
      <p>+34 623 961 097</p>
      <a
        href="https://www.instagram.com/bihotz.studio/"
        target="_blank"
        rel="noopener"
      >
        {t.followUs} <span className={styles.underlined}>Instagram</span>
      </a>
    </footer>
  );
};
