import { services } from "../../data/demoContent";
import LoopCarousel from "../composites/LoopCarousel";
import ServiceCard from "../composites/ServiceCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ServicesBlock() {
  return (
    <section className="surface-section">
      <Container>
        <SectionHeading
          title="Reusable Service Cards Carousel"
          description="Autoplay + drag loop carousel that you can reuse in landing pages."
        />
        <LoopCarousel
          items={services}
          renderItem={(item, key) => <ServiceCard key={key} item={item} />}
          visibleItems={4}
          autoplayMs={2600}
        />
      </Container>
    </section>
  );
}

export default ServicesBlock;
