import { useState } from "react";
import { site } from "../data/siteConfig";
import useTheme from "../hooks/useTheme";
import { LogoMark, SunIcon, MoonIcon, MenuIcon, CloseIcon } from "./Icons.jsx";
import "../styles/navbar.css";

// Add or remove menu links here. href must match a section id on the page.
const links = [
  { href: "#courses", label: "Courses" },
  { href: "#notes", label: "Free notes" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="nav__name">
            {site.name}
            <span className="nav__sub">Academy</span>
          </span>
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`} aria-label="Main">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="icon-btn nav__menu"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
