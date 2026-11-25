import { SourceLink } from "./SourceLink.jsx";

export function Claim({ item }) {
  return (
    <article className="claim" id={item.id}>
      {item.date ? <p className="claim-date">{item.date}</p> : null}
      {item.heading ? <h3>{item.heading}</h3> : null}
      <div className="claim-body">
        {item.blocks.map((block, index) => {
          if (block.type === "p") {
            return <p key={index}>{block.text}</p>;
          }

          if (block.type === "quote") {
            return (
              <blockquote key={index}>
                <p>{block.text}</p>
                {block.attribution ? <footer>— {block.attribution}</footer> : null}
              </blockquote>
            );
          }

          if (block.type === "list") {
            return (
              <ul key={index}>
                {block.items.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
      {item.sources?.length ? (
        <div className="sources">
          <p className="sources-caption">Sources</p>
          <ul className="source-list">
            {item.sources.map((source) => (
              <li key={source.url}>
                <SourceLink source={source} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
