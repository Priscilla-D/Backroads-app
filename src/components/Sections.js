import { SECTIONS_LINKS } from "../utils/data";

function Sections({className}) {
  return (
    <>
      {SECTIONS_LINKS.map((section) => (
        <li key={section.id}>
          <a href={`#${section.name}`} className={className}>
            {section.name}
          </a>
        </li>
      ))}
    </>
  );
}

export default Sections;
