export function Footer({ meta }) {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>{meta.footer}</p>
      </div>
    </footer>
  );
}
