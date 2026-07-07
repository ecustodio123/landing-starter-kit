import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useI18n } from "../lang/i18n";

function NotFoundPage() {
  const { t } = useI18n();

  return (
    <main className="starter-page">
      <section className="starter-card" aria-labelledby="not-found-title">
        <h1 id="not-found-title">{t("pages.notFound.title")}</h1>
        <p>{t("pages.notFound.description")}</p>
        <Button component={Link} to="/" variant="contained">
          {t("pages.notFound.backHome")}
        </Button>
      </section>
    </main>
  );
}

export default NotFoundPage;
