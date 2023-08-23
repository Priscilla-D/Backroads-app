import logo from "../images/logo.svg";
import Sections from "./Sections";
import Socials from "./Socials";

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

          <ul className="nav-links" id="nav-links">
            <Sections className={"nav-link"} />
          </ul>

          <ul className="nav-icons">
            <Socials />
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
