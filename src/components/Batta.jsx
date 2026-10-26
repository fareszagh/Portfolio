import { profile } from '../config.js';
import Panel from './Panel.jsx';
import BrowserDemo from './BrowserDemo.jsx';
import { GithubIcon } from './Icons.jsx';

// Pages recreated from the Batta.tn client (HomePage, LiveAuctionPage, AdminDashboardPage).

function Header({ auth = true }) {
  return (
    <div className="bt__nav">
      <span className="bt__logo">
        <i>b</i>batta.tn
      </span>
      <span className="bt__search">⌕ Search auctions...</span>
      <span className="bt__links">
        <b>Live Auctions</b>
        <span>Categories</span>
        <span>About Us</span>
      </span>
      {auth ? (
        <span className="bt__row">
          <span className="bt__ghost">Login</span>
          <span className="bt__btn">Sign Up</span>
        </span>
      ) : (
        <i className="bt__avatar">Y</i>
      )}
    </div>
  );
}

const lots = [
  ['📷', 'Canon EOS R6', '$1,850', 12, '03:00:00'],
  ['⌚', 'Rolex Submariner', '$12,500', 28, '02:45:00'],
  ['💻', 'MacBook Pro 16"', '$2,100', 8, '05:00:00'],
  ['👟', 'Nike Air Jordan 1', '$320', 15, '01:00:00'],
];

function HomePage() {
  return (
    <>
      <Header />
      <div className="bt__hero">
        <div className="bt__hero-copy">
          <span className="bt__pill">Over 5,000 Live Auctions</span>
          <h4>
            Bid On Rare <u>Items Live</u>
          </h4>
          <p>Discover premium lots from verified sellers. Real-time bidding, secure payments, and exclusive collectibles worldwide.</p>
          <div className="bt__row">
            <span className="bt__btn">Start Bidding →</span>
            <span className="bt__ghost">▷ How It Works</span>
          </div>
          <div className="bt__row bt__muted">
            <span>🛡 Secure Payments</span>
            <span>✔ Verified Sellers</span>
          </div>
        </div>
        <div className="bt__featured">
          <div className="bt__img bt__img--dark">
            ⌚<span className="bt__live">● Live Now</span>
          </div>
          <div className="bt__featured-body">
            <strong className="bt__serif">Rolex Submariner</strong>
            <span className="bt__muted">Mint Condition (2022-2023)</span>
            <span>
              Current Bid: <b className="bt__chip">$12,500</b>
            </span>
            <span className="bt__timer">⏱ 02:45:00</span>
          </div>
        </div>
      </div>
      <div className="bt__band">
        <div className="bt__row bt__row--between">
          <strong>Live Auctions</strong>
          <b className="bt__link">View All →</b>
        </div>
        <div className="bt__cards">
          {lots.map(([icon, title, bid, bids, ends]) => (
            <div key={title} className="bt__card">
              <div className="bt__img">{icon}</div>
              <strong>{title}</strong>
              <span className="bt__row bt__row--between">
                <b className="bt__price">{bid}</b>
                <span className="bt__muted">{bids} bids</span>
              </span>
              <span className="bt__timer">⏱ {ends}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const bidHistory = [
  ['WatchHunter', '$12,500', 'Highest'],
  ['Collector88', '$12,250', ''],
  ['TimeKeeper', '$12,000', ''],
];

const chat = [
  ['Host', 'Welcome to lot #42! Bidding opens now.'],
  ['Collector88', 'Beautiful piece!'],
  ['You', 'Is the bezel original?'],
];

function LiveAuctionPage() {
  return (
    <>
      <Header auth={false} />
      <div className="bt__live-grid">
        <div className="bt__stack">
          <div className="bt__img bt__img--dark bt__img--wide">
            ⌚
            <span className="bt__live bt__live--left">● LIVE</span>
            <span className="bt__viewers">👁 4,289</span>
          </div>
          <div className="bt__panel">
            <span className="bt__row">
              <span className="bt__badge">Lot #42</span>
              <span className="bt__muted">Watches &amp; Timepieces</span>
            </span>
            <strong className="bt__serif bt__title">Rare Vintage Rolex Submariner</strong>
            <span className="bt__muted">Ref. 5513 'Meters First' Dial - Circa 1968</span>
            <span className="bt__row">
              <i className="bt__avatar">H</i>
              <span>
                <b>Heritage Auctions Ltd.</b>
                <br />
                <span className="bt__verified">✔ Verified Seller</span>
              </span>
            </span>
          </div>
        </div>
        <div className="bt__stack">
          <div className="bt__panel">
            <span className="bt__row bt__row--between">
              <span className="bt__muted">Time Left</span>
              <b className="bt__danger">00:04:12</b>
            </span>
            <span className="bt__muted">Current Highest Bid</span>
            <strong className="bt__big">
              $12,500 <small>USD</small>
            </strong>
            <span className="bt__row bt__row--between">
              <b>Live Bid Activity</b>
              <span className="bt__live-tag">● Real-time</span>
            </span>
            {bidHistory.map(([user, amount, tag]) => (
              <span key={user} className="bt__row bt__row--between bt__bid">
                <span>{user}</span>
                <span>
                  {tag && <em>{tag}</em>} <b>{amount}</b>
                </span>
              </span>
            ))}
            <span className="bt__row">
              <span className="bt__input">$12,750</span>
              <span className="bt__btn">Place Bid</span>
            </span>
          </div>
          <div className="bt__panel">
            <b>Live Chat</b>
            {chat.map(([user, msg]) => (
              <span key={msg} className={`bt__msg${user === 'Host' ? ' is-host' : ''}`}>
                <b>{user}</b> {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const stats = [
  ['Total Users', '12,458', '+5.2% this week'],
  ['Active Auctions', '1,245', '+12 new today'],
  ['Total Sales', '$125,430', '+8.1% this month'],
  ['Pending Reports', '23', 'Needs review'],
];

const activity = [['Mon', 40], ['Tue', 65], ['Wed', 45], ['Thu', 80], ['Fri', 55], ['Sat', 90], ['Sun', 70]];

const reports = [
  ['Rolex Watch', '#A-1024', 'Fake Item', 'danger'],
  ['iPhone 15 Pro', '#A-2041', 'Not as described', 'info'],
  ['Nike Air Jordan 1', '#A-3089', 'Fake Item', 'danger'],
];

function AdminDashboardPage() {
  return (
    <>
      <Header auth={false} />
      <div className="bt__admin">
        <strong className="bt__title">Overview</strong>
        <div className="bt__stats">
          {stats.map(([label, value, trend]) => (
            <div key={label} className="bt__panel">
              <span className="bt__muted">{label}</span>
              <strong className="bt__big">{value}</strong>
              <span className={label === 'Pending Reports' ? 'bt__danger' : 'bt__up'}>{trend}</span>
            </div>
          ))}
        </div>
        <div className="bt__admin-cols">
          <div className="bt__panel">
            <b>Platform Activity</b>
            <div className="bt__chart">
              {activity.map(([day, v]) => (
                <span key={day}>
                  <i style={{ height: `${v}%` }} />
                  {day}
                </span>
              ))}
            </div>
          </div>
          <div className="bt__panel">
            <b>Reported Auctions</b>
            {reports.map(([item, id, reason, type]) => (
              <span key={id} className="bt__row bt__row--between bt__bid">
                <span>
                  <b>{item}</b> <span className="bt__muted">{id}</span>
                </span>
                <span className={`bt__reason is-${type}`}>{reason}</span>
                <span className="bt__row">
                  <span className="bt__mini">Review</span>
                  <span className="bt__mini bt__mini--danger">Remove</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const pages = [
  [HomePage, '/'],
  [LiveAuctionPage, '/live/rolex-5513'],
  [AdminDashboardPage, '/admin'],
];

export default function Batta({ t }) {
  const b = t.batta;
  return (
    <Panel className="project">
      <div className="project__meta">
        <span className="chip chip--blue">{b.chip}</span>
        <span className="c-muted">{b.period}</span>
        {profile.battaRepo && (
          <a href={profile.battaRepo} target="_blank" rel="noreferrer" className="project__link">
            <GithubIcon /> {b.repo}
          </a>
        )}
      </div>

      <h2 className="project__title">
        {b.name} — {b.kind}
      </h2>
      <p className="project__desc">{b.description}</p>

      <BrowserDemo d={b.demo} pages={pages} host="batta.tn" tone="blue" skin="bt" />

      <div className="box">
        <ul className="bullets">
          {b.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <ul className="tags">
        {b.stack.map((s, i) => (
          <li key={s} className={i === 0 ? 'tag--blue' : ''}>
            {s}
          </li>
        ))}
      </ul>
    </Panel>
  );
}
