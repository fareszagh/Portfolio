import { useEffect, useState } from 'react';
import { CpuIcon, LayersIcon, UserIcon } from './Icons.jsx';

const tabs = [
  { id: 'projects', icon: <LayersIcon /> },
  { id: 'skills', icon: <CpuIcon /> },
  { id: 'contact', icon: <UserIcon /> },
];

// Phone-only tab bar, highlighting the section currently on screen.
export default function BottomNav({ t }) {
  const [active, setActive] = useState('projects');

  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.4;
      let current = tabs[0].id;
      for (const { id } of tabs) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < mid) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = tabs[tabs.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="bottomnav" aria-label="Sections">
      {tabs.map((tab) => (
        <a key={tab.id} href={`#${tab.id}`} className={active === tab.id ? 'is-active' : ''}>
          {tab.icon}
          <span>{t.nav[tab.id]}</span>
        </a>
      ))}
    </nav>
  );
}
