import { useEffect, useState } from 'react';
import { GlobeIcon } from './Icons.jsx';

// Browser-window mockup that cycles through recreated pages of a project's website.
// pages: [[Component, path], ...] in the same order as d.screens.
export default function BrowserDemo({ d, pages, host, tone, skin }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % pages.length), 5000);
    return () => clearInterval(id);
  }, [auto, pages.length]);

  const [Page, path] = pages[active];

  return (
    <div className="box">
      <div className="box__head">
        <span className={`c-${tone}`}>
          <GlobeIcon /> {d.title}
        </span>
        <span className="c-green">{d.meta}</span>
      </div>
      <div className={`demo demo--web demo--${tone}`}>
        <div className="browser" aria-hidden="true">
          <div className="browser__bar">
            <span className="browser__dots">
              <i />
              <i />
              <i />
            </span>
            <span className="browser__url">
              {host}
              {path}
            </span>
          </div>
          <div className={`browser__screen ${skin}`} key={active}>
            <Page />
          </div>
        </div>
        <div className="demo__tabs" role="tablist">
          {d.screens.map((s, i) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`demo__tab${i === active ? ' is-active' : ''}`}
              onClick={() => {
                setActive(i);
                setAuto(false);
              }}
            >
              <span className="demo__tag">{s.label}</span>
              <strong>{s.title}</strong>
              <span className="demo__desc">{s.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
