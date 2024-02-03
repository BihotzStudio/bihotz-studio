"use client";

import Logo from "@/components/icons/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./navbar.module.css";

const links = [
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
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
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <button
        className={`${styles.menu} ${showMobileMenu ? styles.menuClose : ""}`}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <div />
        <div />
        <div />
      </button>
      <ul className={`${styles.links} ${showMobileMenu ? styles.open : ""}`}>
        {links.map((link, index) => (
          <li key={link.name}>
            <Link
              href={link.href}
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
            style={{ left: indicatorPosition + "px", width: "6px" }}
          />
        )}
      </ul>
    </nav>
  );
}
