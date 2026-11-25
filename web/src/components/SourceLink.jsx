export function SourceLink({ source }) {
  return (
    <a href={source.url} target="_blank" rel="noopener noreferrer">
      {source.label}
      {source.published ? ` (${source.published})` : null}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
