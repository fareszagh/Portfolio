import { useState } from 'react';
import { profile, cvFiles } from '../config.js';
import Panel from './Panel.jsx';
import { CopyIcon, DownloadIcon, GithubIcon, LinkedinIcon } from './Icons.jsx';

export default function Contact({ t, lang }) {
  const c = t.contact;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked — the address is still visible on the card
    }
  };

  return (
    <Panel id="contact" className="panel--glow contact">
      <div className="contact__id">
        <span className="avatar">FZ</span>
        <div>
          <p className="contact__name">
            {profile.name} <span className="dot dot--green" />
          </p>
          <a href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
          </a>
          {profile.phone && <p className="c-muted contact__line">{profile.phone}</p>}
          <p className="c-muted contact__line">{c.role}</p>
        </div>
      </div>

      <div className="contact__actions">
        <div className="contact__row">
          <button type="button" className="btn btn--dark btn--sm" onClick={copy}>
            <span className="c-cyan"><CopyIcon /></span> {copied ? c.copied : c.copy}
          </button>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--dark btn--sm">
              <span className="c-purple"><LinkedinIcon /></span> LinkedIn
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--dark btn--sm">
              <GithubIcon /> GitHub
            </a>
          )}
        </div>
        <a href={cvFiles[lang]} className="btn btn--glow btn--sm" download>
          <DownloadIcon /> {c.cv}
        </a>
      </div>
    </Panel>
  );
}
