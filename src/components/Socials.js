import { SOCIALS_LINKS } from "../utils/data";

function Socials() {
  return (
    <>
      {SOCIALS_LINKS.map((social) => {
        const { id, src, icon } = social;
        return (
          <li key={id}>
            <a href={src} target="_blank" className="nav-icon" rel="noreferrer">
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </>
  );
}
export default Socials;
