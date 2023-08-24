import { SECTIONS_LINKS } from "../utils/data";
import Section from "./Section"

function Sections({ parentClassName, itemClassName }) {
  return (
    <ul className={parentClassName}>
      {SECTIONS_LINKS.map((section) => (
        <Section {...section} itemClassName={itemClassName} key={section.id} />
      ))}
    </ul>
  );
}

export default Sections;
