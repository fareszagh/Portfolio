import { useEffect, useState } from 'react';
import { content, languages } from './content.js';
import TopBar from './components/TopBar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import CarGo from './components/CarGo.jsx';
import Batta from './components/Batta.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Languages from './components/Languages.jsx';
import Contact from './components/Contact.jsx';
import BottomNav from './components/BottomNav.jsx';

const STORAGE_KEY = 'portfolio-lang';
const THEME_KEY = 'portfolio-theme';

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && content[saved]) return saved;
  } catch {
    // storage unavailable — fall through to the browser language
  }
  const browser = (navigator.language || 'en').slice(0, 2);
  return content[browser] ? browser : 'en';
}

// index.html sets data-theme before first paint (saved choice or system setting); start from that.
function initialTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [theme, setTheme] = useState(initialTheme);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  return (
    <>
      <TopBar
        t={t}
        lang={lang}
        languages={languages}
        onLangChange={setLang}
        theme={theme}
        onThemeToggle={() => setTheme((v) => (v === 'light' ? 'dark' : 'light'))}
      />
      <main className="shell stack">
        <Hero t={t} lang={lang} />
        <Projects t={t} />
        <CarGo t={t} />
        <Batta t={t} />
        <Skills t={t} />
        <div className="grid-2">
          <Education t={t} />
          <Languages t={t} />
        </div>
        <Contact t={t} lang={lang} />
      </main>
      <footer className="footer shell">
        © {new Date().getFullYear()} Fares Zaghdoudi · {t.footer}
      </footer>
      <BottomNav t={t} />
    </>
  );
}
