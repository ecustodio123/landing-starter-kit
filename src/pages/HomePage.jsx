import ContactBlock from "../components/blocks/ContactBlock";
import HeroBlock from "../components/blocks/HeroBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";

function HomePage() {
  return (
    <main>
      <HeroBlock />
      <ServicesBlock />
      <TestimonialsBlock />
      <ContactBlock />
    </main>
  );
}

export default HomePage;
