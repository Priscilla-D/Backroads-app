import logo from "../images/logo.svg";
import { SECTIONS_LINKS, SOCIALS_LINKS } from "../utils/articles";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {SECTIONS_LINKS.map((section) => {
              return (
                <li>
                  <a href={`#${section.name}`} className="nav-link">
                    {section.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {SOCIALS_LINKS.map((social) => {
              return (
                <li>
                  <a href={social.src} target="_blank" className="nav-icon">
                    <i className={social.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
