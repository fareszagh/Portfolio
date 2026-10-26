import Reveal from './Reveal.jsx';

// The bordered console-style card every section is built from.
export default function Panel({ id, icon, title, meta, className = '', children }) {
  return (
    <Reveal as="section" className={`panel ${className}`}>
      {id && <span id={id} className="anchor" />}
      {title && (
        <header className="panel__head">
          <h2 className="panel__title">
            {icon}
            {title}
          </h2>
          {meta && <span className="panel__meta">{meta}</span>}
        </header>
      )}
      {children}
    </Reveal>
  );
}
