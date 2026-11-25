export function SectionNav({ sections, activeId }) {
  return (
    <nav className="section-nav" aria-label="Sections">
      <ul className="wrap">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-current={activeId === section.id ? "location" : undefined}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
