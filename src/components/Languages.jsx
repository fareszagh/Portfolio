import Panel from './Panel.jsx';
import { GlobeIcon } from './Icons.jsx';

const tones = ['cyan', 'purple', 'amber'];

export default function Languages({ t }) {
  const l = t.langs;
  return (
    <Panel icon={<GlobeIcon />} title={l.title}>
      <div className="meters">
        {l.items.map((item, i) => (
          <div key={item.code} className="meter-row">
            <div className="meter-row__head">
              <strong>
                {item.name} <span className="c-muted">({item.code})</span>
              </strong>
              <span className={`c-${tones[i]}`}>{item.level}</span>
            </div>
            <div className="meter">
              <span className={`meter__fill meter__fill--${tones[i]}`} style={{ width: `${item.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="meters__foot">
        <span className="c-muted">{l.footnote}</span>
        <span className="c-cyan">FR · EN · DE</span>
      </div>
    </Panel>
  );
}
