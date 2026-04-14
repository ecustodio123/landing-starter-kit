import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import EnricoCustodioNoBg from "../../assets/img/staff/EnricoCustodioNoBg.png";

function HeroBlock2({ variant = "a", ctaHref }) {
  const { t } = useI18n();
  const resolvedCtaHref = ctaHref ?? t("business.whatsappHref");

  return (
    <section className={`page-hero-2 page-hero-2--${variant}`}>
      <Container className="hero2-layout">
        <div className="hero2-copy">
          <p className="hero2-kicker">{t("home.hero2.kicker")}</p>
          <h1>{t("home.hero2.title")}</h1>
          <p className="hero2-description">{t("home.hero2.description")}</p>
          <a className="btn btn-primary hero2-cta" href={resolvedCtaHref} target="_blank" rel="noreferrer">
            <CalendarMonthOutlinedIcon sx={{ fontSize: 18, marginRight: "0.35rem" }} />
            {t("home.hero2.cta")}
          </a>
        </div>

        <div className={`hero2-visual hero2-visual--${variant}`}>
          <div className="hero2-circle-wrap">
            <div className="hero2-circle-bg" aria-hidden="true" />
            <div className="hero2-circle-ring" aria-hidden="true" />
            <img className="hero2-figure-image" src={EnricoCustodioNoBg} alt={t("home.hero2.imageAlt")} />
          </div>

          {variant === "a" ? (
            <>
              <span className="hero2-paw hero2-paw--one" aria-hidden="true" />
              <span className="hero2-paw hero2-paw--two" aria-hidden="true" />
            </>
          ) : (
            <>
              <div className="hero2-bubble hero2-bubble--one" aria-hidden="true" />
              <div className="hero2-bubble hero2-bubble--two" aria-hidden="true" />
              <div className="hero2-badge" aria-hidden="true">
                <p>{t("home.hero2.badgeValue")}</p>
                <span>{t("home.hero2.badgeLabel")}</span>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

export default HeroBlock2;
