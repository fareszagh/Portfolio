import Panel from './Panel.jsx';
import { CapIcon } from './Icons.jsx';

export default function Education({ t }) {
  const e = t.education;
  return (
    <Panel id="education" icon={<CapIcon />} title={e.title}>
      <div className="edu">
        {e.items.map((item) => (
          <div key={item.name} className="edu__item">
            <div className="edu__head">
              <h3>{item.name}</h3>
              <span className={`pill ${item.done ? 'pill--green' : ''}`}>{item.status}</span>
            </div>
            <p className="edu__school">
              <span className={item.done ? 'c-green' : 'c-muted'}>{item.school}</span>
              {item.period && <span className="c-muted"> · {item.period}</span>}
            </p>
          </div>
        ))}
      </div>
    </Panel>
  );
}
