export function Header({ meta }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <h1>{meta.title}</h1>
        <p className="updated">
          Last updated{" "}
          <time dateTime={meta.lastUpdatedIso}>{meta.lastUpdated}</time>
        </p>
        <p className="span">Chronology: {meta.span}</p>
        <p className="tagline">{meta.tagline}</p>
        <p className="update-note">{meta.updateNote}</p>
      </div>
    </header>
  );
}
