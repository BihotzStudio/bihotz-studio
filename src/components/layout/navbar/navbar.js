"use client";

import Logo from "@/components/icons/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./navbar.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";

const links = [
  { name: "services", href: "/servicios" },
  { name: "projects", href: "/proyectos" },
  { name: "contact", mailto: "mailto:info@bihotz.studio.com" },
];

export default function Navbar({ locale, t }) {
  const pathname = usePathname();
  const [indicatorPosition, setIndicatorPosition] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const linksRef = useRef([]);
  const baseUrl = `/${locale}`;

  useEffect(() => {
    const index = links.findIndex((link) => pathname.includes(link.href));

    if (index >= 0) {
      setIndicatorPosition(
        linksRef.current[index]?.offsetLeft +
          linksRef.current[index]?.offsetWidth / 2 -
          3
      );
    } else if (index) {
      setIndicatorPosition(null);
    }
  }, [pathname]);

  return (
    <BorderAnimation
      bottom={{ reverse: true, duration: "2s" }}
      className={styles.borderNavbar}
    >
      <nav className={styles.container}>
        <Link
          href="/"
          onClick={() => setShowMobileMenu(false)}
          className={styles.logo}
          aria-label="Bihotz studio"
        >
          <Logo />
        </Link>
        <button
          className={`${styles.menu} ${showMobileMenu ? styles.menuClose : ""}`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          aria-label="Menu"
        >
          <div />
          <div />
        </button>
        <div
          className={`${styles.containerLinks} ${
            showMobileMenu ? styles.open : ""
          }`}
        >
          <ul className={styles.links}>
            {links.map((link, index) => (
              <li key={link.name}>
                <Link
                  target={`${link.href ? "_self" : "_blank"}`}
                  href={`${link.href ? baseUrl + link.href : link.mailto}`}
                  className={styles.link}
                  ref={(el) => (linksRef.current[index] = el)}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {t[link.name]}
                </Link>
              </li>
            ))}
            {indicatorPosition && (
              <div
                className={styles.indicator}
                style={{ left: indicatorPosition + "px" }}
              />
            )}
          </ul>
          <div className={styles.menuFooter}>
            <p>info@bihotz-studio.com</p>
            <p>+34 697 525 425</p>
            <a
              href="https://www.instagram.com/bihotz.studio/"
              target="_blank"
              rel="noopener"
            >
              Siguenos en <span className={styles.underlined}>Instagram</span>
            </a>
          </div>
        </div>
      </nav>
    </BorderAnimation>
  );
}
