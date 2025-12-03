import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change or resize for robustness
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="brand">Wazariyo</div>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="overlay" onClick={() => setOpen(false)} />
      </div>
    </nav>
  );
}
