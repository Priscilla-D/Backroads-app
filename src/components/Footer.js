import Sections from "./Sections";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <Sections className={"footer-link"} />
      </ul>
      <ul className="footer-icons">
        <Socials />
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
