"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/contact" },
];

export default function Header({ siteName = "weberzio", logoUrl = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`${styles.header} ${menuOpen ? styles.headerHidden : ""}`}>
        <div className={styles.inner}>
          <a href="/" className={styles.logo} aria-label={siteName}>
            {logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoUrl} alt={siteName} className={styles.logoImg} />
            ) : (
              <span>{siteName}</span>
            )}
          </a>

          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className={styles.menuLabel}>
              <span className={styles.menuLabelInner} data-open={menuOpen}>
                <span>Menu</span>
                <span>Close</span>
              </span>
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={NAV_ITEMS}
        siteName={siteName}
      />
    </>
  );
}
