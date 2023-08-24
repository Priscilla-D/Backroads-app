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

          <Sections parentClassName="nav-links" itemClassName="nav-link" />
          <Socials parentClassName="nav-icons" />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
