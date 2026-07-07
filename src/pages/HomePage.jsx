import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FaReact } from "react-icons/fa";
import { useI18n } from "../lang/i18n";

function HomePage() {
  const { language, setLanguage, t } = useI18n();

  return (
    <main className="starter-page">
      <section className="starter-card" aria-labelledby="home-title">
        <FaReact className="starter-icon" aria-hidden="true" />
        <p className="starter-kicker">{t("home.kicker")}</p>
        <h1 id="home-title">{t("home.title")}</h1>
        <p>{t("home.description")}</p>

        <Stack direction="row" spacing={1} className="language-actions" aria-label={t("language.switchLabel")}>
          <Button variant={language === "en" ? "contained" : "outlined"} onClick={() => setLanguage("en")}>
            {t("language.en")}
          </Button>
          <Button variant={language === "es" ? "contained" : "outlined"} onClick={() => setLanguage("es")}>
            {t("language.es")}
          </Button>
        </Stack>
      </section>
    </main>
  );
}

export default HomePage;
