import ContactBlock from "../components/blocks/ContactBlock";
import HeroBlock from "../components/blocks/HeroBlock";
import HeroBlock2 from "../components/blocks/HeroBlock2";
import HomeAboutTeaserBlock from "../components/blocks/HomeAboutTeaserBlock";
import HomeCtaStripBlock from "../components/blocks/HomeCtaStripBlock";
import SocialLinksBlock from "../components/blocks/SocialLinksBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import ServicesBlock2 from "../components/blocks/ServicesBlock2";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";

function HomePage() {
  return (
    <main>
      <HeroBlock />
      <HeroBlock2 variant="a" />
      <HeroBlock2 variant="b" />
      <HomeAboutTeaserBlock />
      <ServicesBlock />
      <ServicesBlock2 />
      <HomeCtaStripBlock />
      <SocialLinksBlock />
      <TestimonialsBlock />
      <ContactBlock />
    </main>
  );
}

export default HomePage;
