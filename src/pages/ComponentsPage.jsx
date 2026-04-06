import ServiceCard from "../components/composites/ServiceCard";
import TestimonialCard from "../components/composites/TestimonialCard";
import Button from "../components/primitives/Button";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import { services, testimonials } from "../data/demoContent";

function ComponentsPage() {
  return (
    <main className="components-showcase">
      <Container className="showcase-stack">
        <SectionHeading title="Components Showcase" description="Reusable primitives and composites." />

        <div className="showcase-row">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>

        <div className="showcase-row">
          <div className="card-grid four" style={{ width: "100%" }}>
            {services.slice(0, 4).map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="showcase-row">
          <div className="card-grid three" style={{ width: "100%" }}>
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default ComponentsPage;
