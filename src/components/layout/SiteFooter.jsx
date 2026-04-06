import { NavLink } from "react-router-dom";
import Container from "../primitives/Container";

function SiteFooter() {
  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div>
          <h3 style={{ marginTop: 0 }}>Landing Starter Kit</h3>
          <p>Reusable React + Tailwind + Router foundation for fast client delivery.</p>
        </div>
        <ul className="footer-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/components">Components</NavLink>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>Ready for clone-and-build workflow</li>
          <li>Token-based theming</li>
          <li>Responsive defaults</li>
        </ul>
      </Container>
      <div className="footer-bottom">© 2026 Landing Starter Kit. Built for reusable freelance workflows.</div>
    </footer>
  );
}

export default SiteFooter;
