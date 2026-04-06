import { testimonials } from "../../data/demoContent";
import TestimonialCard from "../composites/TestimonialCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function TestimonialsBlock() {
  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title="Testimonials Section" description="Simple reusable card grid for social proof." />
        <div className="card-grid three">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsBlock;
