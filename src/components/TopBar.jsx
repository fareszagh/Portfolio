import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { MoonIcon, SunIcon } from './Icons.jsx';

const sections = ['projects', 'skills', 'contact'];

export default function TopBar({ t, lang, languages, onLangChange, theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell topbar__inner">
        <a href="#top" className="brand" aria-label="Fares Zaghdoudi">
          <Logo />
          <span className="brand__text">
            <strong>Fares</strong>
            <span>Zaghdoudi</span>
          </span>
        </a>

        <nav className="topbar__nav" aria-label="Main">
          {sections.map((id) => (
            <a key={id} href={`#${id}`}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="topbar__right">
          <span className="pill pill--green topbar__online">
            <span className="dot dot--green" /> {t.online}
          </span>
          <div className="lang-switch" role="group" aria-label="Language">
            <span className="c-muted">[</span>
            {languages.map((l, i) => (
              <span key={l.code} className="lang-switch__item">
                {i > 0 && <span className="c-muted">|</span>}
                <button
                  type="button"
                  className={l.code === lang ? 'is-active' : ''}
                  aria-pressed={l.code === lang}
                  onClick={() => onLangChange(l.code)}
                >
                  {l.label}
                </button>
              </span>
            ))}
            <span className="c-muted">]</span>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={theme === 'light' ? t.theme.dark : t.theme.light}
            title={theme === 'light' ? t.theme.dark : t.theme.light}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
