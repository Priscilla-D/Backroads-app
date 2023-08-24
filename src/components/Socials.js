import { SOCIALS_LINKS } from "../utils/data";
import Social from "./Social";

function Socials({ parentClassName }) {
  return (
    <ul className={parentClassName}>
      {SOCIALS_LINKS.map((social) => (
         <Social {...social} key={social.id} />
      ))}
    </ul>
  );
}
export default Socials;
