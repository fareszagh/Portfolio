import { profile } from '../config.js';
import Panel from './Panel.jsx';
import Demo from './Demo.jsx';
import { BranchIcon, CpuIcon, ExternalIcon, GithubIcon, LayersIcon } from './Icons.jsx';

const moduleTones = ['cyan', 'cyan', 'purple', 'green'];

export default function Projects({ t }) {
  const p = t.project;
  return (
    <Panel id="projects" className="panel--glow project">
      <div className="project__meta">
        <span className="chip chip--cyan">{p.chip}</span>
        <span className="c-muted">{p.period}</span>
        {profile.gastronomeRepo && (
          <a href={profile.gastronomeRepo} target="_blank" rel="noreferrer" className="project__link">
            <GithubIcon /> {p.repo}
          </a>
        )}
        {profile.gastronomeLive && (
          <a href={profile.gastronomeLive} target="_blank" rel="noreferrer" className="project__link">
            <ExternalIcon /> {p.live}
          </a>
        )}
      </div>

      <h2 className="project__title">
        {p.name} — {p.kind}
      </h2>
      <p className="project__desc">{p.description}</p>

      <div className="box">
        <div className="box__head">
          <span className="c-cyan">
            <LayersIcon /> {p.topology}
          </span>
          <span className="c-green">{p.topologyMeta}</span>
        </div>
        <div className="modules">
          {p.modules.map((m, i) => (
            <div key={m.tag} className={`module module--${moduleTones[i]}`}>
              <span className={`module__tag c-${moduleTones[i]}`}>[{m.tag.toUpperCase()}]</span>
              <strong>{m.name}</strong>
              <span className="module__desc">{m.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <Demo d={p.demo} />

      <div className="box">
        <div className="box__head">
          <span className="c-cyan">
            <BranchIcon /> {p.ownership}
          </span>
        </div>
        <ul className="bullets">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <ul className="tags">
        {p.stack.map((s, i) => (
          <li key={s} className={i === 0 ? 'tag--cyan' : ''}>
            {s}
          </li>
        ))}
        <li className="tag--purple">
          <CpuIcon /> AI Agent
        </li>
      </ul>
    </Panel>
  );
}
