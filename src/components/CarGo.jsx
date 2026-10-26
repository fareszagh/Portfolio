import { profile } from '../config.js';
import Panel from './Panel.jsx';
import BrowserDemo from './BrowserDemo.jsx';
import { GithubIcon } from './Icons.jsx';

// Pages recreated from the Pair-MVP-project frontend (LandingPage, dashboard, Transporterdashboard).

function WebNav({ user }) {
  return (
    <div className="web__nav">
      <span className="web__logo">
        Car<b>Go</b>
      </span>
      {user ? (
        <span className="web__user">
          <i>{user[0]}</i> {user} <span className="web__ghost">Sign out</span>
        </span>
      ) : (
        <span className="web__user">
          <span className="web__ghost">Sign in</span>
          <span className="web__cta">Get Started →</span>
        </span>
      )}
    </div>
  );
}

function LandingPage() {
  return (
    <>
      <WebNav />
      <div className="web__hero">
        <div className="web__hero-copy">
          <span className="web__eyebrow">— Shipping marketplace for Tunisia</span>
          <h4>
            Post a shipment.
            <br />
            Find a <b>transporter.</b>
            <br />
            Ship it.
          </h4>
          <p>Connects people who need to ship cargo with verified transporters — no brokers, no delays, just a direct match.</p>
          <div className="web__row">
            <span className="web__cta">Post Your First Offer →</span>
            <span className="web__ghost">I'm a Transporter</span>
          </div>
          <div className="web__proof">
            <span>✓ Free to join</span>
            <span>✓ No brokerage fees</span>
            <span>✓ Direct contact</span>
          </div>
        </div>
        <div className="web__visual">
          <div className="web__card">
            <span className="web__label">● ● ● &nbsp;New Offer</span>
            <div className="web__route">
              <span>Tunis</span>
              <i />
              <span>Sfax</span>
            </div>
            <div className="web__tags">
              <span>📦 120 kg</span>
              <span>150 cm</span>
              <span className="is-accent">3 applicants</span>
            </div>
          </div>
          <div className="web__card web__card--app">
            <i className="web__avatar">A</i>
            <div>
              <strong>Ahmed K.</strong>
              <span>"Available tomorrow morning"</span>
            </div>
            <span className="web__ok">✓</span>
          </div>
        </div>
      </div>
    </>
  );
}

const myOffers = [
  ['Tunis', 'Sfax', 'Electronics delivery', 120, 150, 3],
  ['Sousse', 'Bizerte', 'Office furniture', 340, 180, 1],
  ['Nabeul', 'Gabès', 'Olive oil barrels', 500, 110, 0],
];

const applicants = [
  ['Ahmed K.', 'pending', 'Available tomorrow morning, covered truck.'],
  ['Sami B.', 'accepted', 'Can pick up today after 2 PM.'],
  ['Youssef M.', 'rejected', 'Weekend delivery only.'],
];

function Stats({ items }) {
  return (
    <div className="web__stats">
      {items.map(([label, value]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function ShipperDashboard() {
  return (
    <>
      <WebNav user="Fares" />
      <div className="web__dash">
        <div className="web__dash-head">
          <div>
            <span className="web__muted">Good day,</span>
            <h4>Fares</h4>
          </div>
          <span className="web__cta">+ New Offer</span>
        </div>
        <Stats items={[['My Offers', 3], ['Total Applicants', 4], ['Accepted', 1]]} />
        <div className="web__cols">
          <div className="web__panel">
            <strong className="web__panel-title">
              My Offers <em>3</em>
            </strong>
            {myOffers.map(([from, to, title, kg, cm, apps], i) => (
              <div key={title} className={`web__offer${i === 0 ? ' is-selected' : ''}`}>
                <span className="web__offer-route">
                  {from} <b>→</b> {to}
                </span>
                <span>{title}</span>
                <div className="web__tags">
                  <span>{kg} kg</span>
                  <span>{cm} cm</span>
                  <span className={apps ? 'is-accent' : ''}>
                    {apps} applicant{apps === 1 ? '' : 's'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="web__panel web__panel--side">
            <strong className="web__panel-title">
              Applicants <em>3</em>
            </strong>
            <span className="web__muted">Tunis → Sfax</span>
            {applicants.map(([name, status, msg]) => (
              <div key={name} className="web__applicant">
                <div className="web__row">
                  <i className="web__avatar">{name[0]}</i>
                  <div>
                    <strong>{name}</strong>
                    <span className={`web__status is-${status}`}>{status}</span>
                  </div>
                  {status === 'pending' && (
                    <span className="web__actions">
                      <span className="web__accept">✓ Accept</span>
                      <span className="web__reject">✕ Reject</span>
                    </span>
                  )}
                </div>
                <span className="web__muted">"{msg}"</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const available = [
  ['Tunis', 'Sfax', 'Electronics delivery', 120, true],
  ['Monastir', 'Kairouan', 'Construction tools', 260, false],
  ['Sousse', 'Bizerte', 'Office furniture', 340, false],
];

const myApplications = [
  ['Tunis → Sfax', 'pending'],
  ['Ariana → Sousse', 'accepted'],
  ['Gafsa → Tozeur', 'rejected'],
];

function TransporterDashboard() {
  return (
    <>
      <WebNav user="Ahmed" />
      <div className="web__dash">
        <div className="web__dash-head">
          <div>
            <span className="web__muted">Welcome back,</span>
            <h4>Ahmed</h4>
          </div>
        </div>
        <Stats items={[['Applied', 3], ['Accepted', 1], ['Rejected', 1]]} />
        <div className="web__cols">
          <div className="web__panel">
            <div className="web__search">⌕ Search offers…</div>
            {available.map(([from, to, title, kg, applied]) => (
              <div key={title} className="web__offer">
                <div className="web__row web__row--between">
                  <span className="web__offer-route">
                    {from} <b>→</b> {to}
                  </span>
                  <span className={applied ? 'web__applied' : 'web__cta'}>{applied ? 'Applied' : 'Apply'}</span>
                </div>
                <span>{title}</span>
                <div className="web__tags">
                  <span>{kg} kg</span>
                </div>
              </div>
            ))}
          </div>
          <div className="web__panel web__panel--side">
            <strong className="web__panel-title">
              My Applications <em>3</em>
            </strong>
            {myApplications.map(([route, status]) => (
              <div key={route} className="web__applicant web__row web__row--between">
                <strong>{route}</strong>
                <span className={`web__status is-${status}`}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const pages = [
  [LandingPage, '/'],
  [ShipperDashboard, '/dashboard'],
  [TransporterDashboard, '/transporter'],
];

export default function CarGo({ t }) {
  const c = t.cargo;
  return (
    <Panel className="project">
      <div className="project__meta">
        <span className="chip chip--amber">{c.chip}</span>
        <span className="c-muted">{c.period}</span>
        {profile.cargoRepo && (
          <a href={profile.cargoRepo} target="_blank" rel="noreferrer" className="project__link">
            <GithubIcon /> {c.repo}
          </a>
        )}
      </div>

      <h2 className="project__title">
        {c.name} — {c.kind}
      </h2>
      <p className="project__desc">{c.description}</p>

      <BrowserDemo d={c.demo} pages={pages} host="cargo" tone="amber" skin="web" />

      <div className="box">
        <ul className="bullets">
          {c.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <ul className="tags">
        {c.stack.map((s, i) => (
          <li key={s} className={i === 0 ? 'tag--amber' : ''}>
            {s}
          </li>
        ))}
      </ul>
    </Panel>
  );
}
