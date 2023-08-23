import { SECTIONS_LINKS, SOCIALS_LINKS } from "../utils/data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {SECTIONS_LINKS.map((section) => (
          <li key={section.id}>
            <a href={`#${section.name}`} className="footer-link">
              {section.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {SOCIALS_LINKS.map((social) => (
          <li key={social.id}>
            <a href={social.src} target="_blank" className="footer-icon">
              <i className={social.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
