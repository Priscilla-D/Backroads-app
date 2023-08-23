import { SOCIALS_LINKS } from "../utils/data";

function Socials() {
  return (
    <>
      {SOCIALS_LINKS.map((social) => (
        <li key={social.id}>
          <a
            href={social.src}
            target="_blank"
            className="nav-icon"
            rel="noreferrer"
          >
            <i className={social.icon}></i>
          </a>
        </li>
      ))}
    </>
  );
}
export default Socials;
