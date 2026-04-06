import { NavLink } from "react-router-dom";
import Button from "../components/primitives/Button";
import Container from "../components/primitives/Container";

function NotFoundPage() {
  return (
    <main className="surface-section">
      <Container>
        <h1 style={{ color: "var(--color-primary)", marginTop: 0 }}>404 - Page Not Found</h1>
        <p style={{ color: "var(--color-text-muted)" }}>This route is not available in the starter kit.</p>
        <NavLink to="/" style={{ display: "inline-block", marginTop: "1rem" }}>
          <Button>Back Home</Button>
        </NavLink>
      </Container>
    </main>
  );
}

export default NotFoundPage;
