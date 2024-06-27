"use client";

import Logo from "@/components/icons/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./navbar.module.css";
import { BorderAnimation } from "@/components/BorderAnimation/BorderAnimation";

const links = [
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
];

export default function Navbar({ locale }) {
  const pathname = usePathname();
  const [indicatorPosition, setIndicatorPosition] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const linksRef = useRef([]);

  useEffect(() => {
    const index = links.findIndex((link) => link.href === pathname);

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
        >
          <Logo />
        </Link>
        <button
          className={`${styles.menu} ${showMobileMenu ? styles.menuClose : ""}`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
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
                  href={`/${locale}/${link.href}`}
                  className={styles.link}
                  ref={(el) => (linksRef.current[index] = el)}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {link.name}
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
