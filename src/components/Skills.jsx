import Panel from './Panel.jsx';
import { CpuIcon } from './Icons.jsx';

// Groups arrive in the same order in every language:
// languages, frontend, backend, AI & automation, tools, databases.
export default function Skills({ t }) {
  const s = t.skills;
  const [langs, frontend, backend, ai, tools, databases] = s.groups;

  const Row = ({ group, className = '', aside }) => (
    <div className={`skill-row ${className}`}>
      <div className="skill-row__head">
        <span className="skill-row__label">{group.label}</span>
        {aside && <span className="skill-row__aside">{aside}</span>}
      </div>
      <ul className="tags">
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <Panel id="skills" icon={<CpuIcon />} title={s.title} meta={s.meta}>
      <div className="skills">
        <Row group={langs} className="skill-row--cyan" />
        <Row group={ai} className="skill-row--purple" aside={s.focus} />
        <div className="skills__split">
          <Row group={frontend} />
          <Row group={backend} />
        </div>
        <Row group={databases} className="skill-row--green" />
        <Row group={tools} />
      </div>
    </Panel>
  );
}
