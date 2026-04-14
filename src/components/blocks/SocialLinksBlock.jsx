import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";
import SocialLinks from "../primitives/SocialLinks";

function SocialLinksBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title={t("home.socialLinksBlock.title")} description={t("home.socialLinksBlock.description")} />
        <SocialLinks className="social-links--showcase" />
      </Container>
    </section>
  );
}

export default SocialLinksBlock;
