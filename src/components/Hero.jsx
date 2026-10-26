import { profile, cvFiles } from '../config.js';
import Panel from './Panel.jsx';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, TerminalIcon } from './Icons.jsx';

export default function Hero({ t, lang }) {
  const h = t.hero;
  return (
    <Panel className="hero">
      <span id="top" className="anchor" />
      <div className="hero__top">
        <span className="chip chip--cyan">
          <TerminalIcon /> {h.chip}
        </span>
        <span className="hero__status">
          <span className="dot dot--green dot--pulse" /> {h.status}
        </span>
      </div>

      <h1 className="hero__name">
        Fares Zaghdoudi <span className="chip chip--purple chip--sm">TS</span>
      </h1>
      <p className="hero__role">{h.role}</p>
      <p className="hero__tagline">{h.tagline}</p>

      <div className="stats">
        {h.stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat__label">{s.label}</span>
            <span className={`stat__value c-${s.tone}`}>{s.value}</span>
          </div>
        ))}
      </div>

      <div className="hero__actions">
        <a href={cvFiles[lang]} className="btn btn--glow" download>
          <DownloadIcon /> {h.cv}
        </a>
        <a href={`mailto:${profile.email}`} className="btn btn--dark">
          <span className="c-cyan"><MailIcon /></span> {profile.email}
        </a>
        {profile.phone && (
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="btn btn--dark">
            <span className="c-purple"><PhoneIcon /></span> {profile.phone}
          </a>
        )}
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--dark btn--icon" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        )}
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--dark btn--icon" aria-label="GitHub">
            <GithubIcon />
          </a>
        )}
      </div>
    </Panel>
  );
}
