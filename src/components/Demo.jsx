import { useEffect, useState } from 'react';
import { SmartphoneIcon } from './Icons.jsx';

// Screens recreated from the Gastronome.tn React Native app (Home, Tracking, AdminPortal).

function AppHeader() {
  return (
    <div className="app__header">
      <span className="app__icon">☰</span>
      <strong>Gastronome.tn</strong>
      <span className="app__icon app__avatar" />
    </div>
  );
}

function NavBar({ active }) {
  const tabs = [
    ['home', 'Home', '⌂'],
    ['cart', 'Cart', '🛒'],
    ['tracking', 'Tracking', '➤'],
    ['orders', 'Orders', '▤'],
  ];
  return (
    <div className="app__nav">
      {tabs.map(([key, label, icon]) => (
        <span key={key} className={key === active ? 'is-active' : ''}>
          <i>{icon}</i>
          {label}
        </span>
      ))}
    </div>
  );
}

const categories = [
  ['🥩', 'Meat'],
  ['🐟', 'Seafood'],
  ['🥬', 'Produce'],
  ['🧀', 'Dairy'],
  ['🫒', 'Pantry'],
];

const products = [
  ['🫒', 'Extra Virgin Olive Oil', '5 L can', '62.500'],
  ['🍅', 'Roma Tomatoes', 'per kg', '2.900'],
  ['🧀', 'Fresh Mozzarella', '1 kg block', '24.000'],
];

function HomeScreen() {
  return (
    <>
      <AppHeader />
      <div className="app__body">
        <div className="app__search">⌕ Search for products, suppliers...</div>
        <div className="app__hero">
          Everything your restaurant needs,
          <br />
          delivered fast, 24/7
        </div>
        <div className="app__section">
          <strong>Categories</strong>
          <span>View All</span>
        </div>
        <div className="app__cats">
          {categories.map(([icon, name]) => (
            <span key={name}>
              <i>{icon}</i>
              {name}
            </span>
          ))}
        </div>
        <div className="app__deal">
          <div className="app__deal-top">
            <span className="app__deal-badge">⚡ FLASH DEAL</span>
            <span>
              Ends in <b>4 days</b>
            </span>
          </div>
          <strong>A5 Miyazaki Wagyu</strong>
          <s>850.000 TND</s>
          <b>510.000 TND/kg</b>
        </div>
        <div className="app__section">
          <strong>Popular Products</strong>
          <span>View All</span>
        </div>
        {products.map(([icon, name, unit, price]) => (
          <div key={name} className="app__product">
            <i>{icon}</i>
            <div>
              <strong>{name}</strong>
              <span>{unit}</span>
              <b>{price} TND</b>
            </div>
            <span className="app__add">+</span>
          </div>
        ))}
      </div>
      <NavBar active="home" />
    </>
  );
}

const steps = [
  ['Order Placed', 'Your order has been received by our system', 'done'],
  ['Order Confirmed', 'We have received and confirmed your order', 'done'],
  ['Preparing Your Order', 'Our team is getting your items ready for shipment', 'done'],
  ['Out for Delivery', 'Your driver is on the way', 'current'],
  ['Order Delivered', 'Your order has been delivered successfully!', ''],
];

function TrackingScreen() {
  return (
    <>
      <AppHeader />
      <div className="app__body">
        <div className="app__card">
          <span className="app__label">ORDER REFERENCE</span>
          <div className="app__row">
            <strong>#GT-20481</strong>
            <span className="app__chip app__chip--transit">En Route</span>
          </div>
        </div>
        <div className="app__card">
          <span className="app__label">ORDER PROGRESS</span>
          <ol className="app__steps">
            {steps.map(([title, desc, state]) => (
              <li key={title} className={state && `is-${state}`}>
                <strong>{title}</strong>
                <span>{desc}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="app__card">
          <span className="app__label">ORDER SUMMARY</span>
          <div className="app__row">
            <span>Delivery Fee</span>
            <b className="app__free">FREE</b>
          </div>
          <div className="app__row">
            <strong>Total</strong>
            <strong>412.700 TND</strong>
          </div>
        </div>
      </div>
      <NavBar active="tracking" />
    </>
  );
}

const pending = [
  ['Le Baroque', '#GT-20493', '186.400'],
  ['Dar El Jeld', '#GT-20494', '742.000'],
  ['Café Sidi Bou', '#GT-20495', '98.250'],
];

function AdminScreen() {
  return (
    <>
      <AppHeader />
      <div className="app__body">
        <h4 className="app__title">Admin Portal</h4>
        <div className="app__card app__card--primary">
          <span className="app__label">OVERVIEW</span>
          <span className="app__live">● Status: Live &amp; Trading</span>
          <div className="app__stats">
            <div>
              <span>PENDING ORDERS</span>
              <strong>3</strong>
            </div>
            <div>
              <span>ACTIVE USERS</span>
              <strong>128</strong>
            </div>
          </div>
        </div>
        <div className="app__section">
          <strong>Pending Orders</strong>
        </div>
        {pending.map(([name, ref, total]) => (
          <div key={ref} className="app__card">
            <div className="app__row">
              <strong>{name}</strong>
              <span className="app__chip">PENDING</span>
            </div>
            <div className="app__row app__muted">
              <span>{ref}</span>
              <span>{total} TND</span>
            </div>
            <div className="app__actions">
              <span className="app__btn">Confirm</span>
              <span className="app__btn app__btn--ghost">Refuse</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const screens = [HomeScreen, TrackingScreen, AdminScreen];

export default function Demo({ d }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % screens.length), 5000);
    return () => clearInterval(id);
  }, [auto]);

  const Screen = screens[active];

  return (
    <div className="box">
      <div className="box__head">
        <span className="c-cyan">
          <SmartphoneIcon /> {d.title}
        </span>
        <span className="c-green">{d.meta}</span>
      </div>
      <div className="demo">
        <div className="phone" aria-hidden="true">
          <div className="phone__notch" />
          <div className="phone__screen app" key={active}>
            <Screen />
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
