import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink } from "react-router-dom";
import { mainNavDropdowns, topNavLinks } from "../../data/navigation";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";
import MainNavDropdown from "./MainNavDropdown";

function SiteHeader() {
  return (
    <header className="site-header">
      <Container className="header-top">
        <NavLink to="/">
          <BrandLogo />
        </NavLink>

        <nav className="header-links">
          {topNavLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className={({ isActive }) => (isActive ? "active" : "")}> 
              {link.label}
            </NavLink>
          ))}
          <a href="tel:9737919770" style={{ color: "var(--color-accent)", fontWeight: 700 }}>
            <PhoneIcon sx={{ fontSize: 15, marginBottom: "-2px" }} /> 973-791-9770
          </a>
        </nav>
      </Container>

      <div className="main-nav-wrap">
        <Container className="main-nav">
          {mainNavDropdowns.map((entry) => (
            <MainNavDropdown key={entry.label} label={entry.label} options={entry.options} />
          ))}
        </Container>
      </div>
    </header>
  );
}

export default SiteHeader;
