import Sections from "./Sections";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="section footer">
      <Sections parentClassName="footer-links" itemClassName="footer-link" />
      <Socials parentClassName="footer-icons" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
