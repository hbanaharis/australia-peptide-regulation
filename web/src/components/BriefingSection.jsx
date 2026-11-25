import { Claim } from "./Claim.jsx";

export function BriefingSection({ section }) {
  const groups = section.months ?? [{ id: section.id, label: null, items: section.items }];

  return (
    <section className="briefing-section" id={section.id} aria-labelledby={`${section.id}-title`}>
      <header className="section-header">
        <h2 id={`${section.id}-title`}>{section.title}</h2>
        {section.dateline ? <p className="dateline">{section.dateline}</p> : null}
        {section.intro ? <p className="section-intro">{section.intro}</p> : null}
      </header>
      {groups.map((group) => (
        <div className="month-group" key={group.id} id={group.label ? group.id : undefined}>
          {group.label ? <h3 className="month-label">{group.label}</h3> : null}
          <div className="claims">
            {group.items.map((item) => (
              <Claim key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
      {section.closing ? <p className="section-closing">{section.closing}</p> : null}
    </section>
  );
}
