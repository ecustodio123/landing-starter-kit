import { heroContent } from "../../data/demoContent";
import Button from "../primitives/Button";
import Container from "../primitives/Container";

function HeroBlock() {
  return (
    <section className="page-hero">
      <Container className="page-hero__inner">
        <div>
          <h1>{heroContent.title}</h1>
          <p>{heroContent.description}</p>
          <Button variant="outline">{heroContent.cta}</Button>
        </div>
        <img src={heroContent.image} alt="Starter hero" />
      </Container>
    </section>
  );
}

export default HeroBlock;
