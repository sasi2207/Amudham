import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaEye, FaBullseye, FaHistory } from "react-icons/fa";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

export default function About() {
  const { t } = useTranslation();
  const values = ["v1", "v2", "v3", "v4", "v5", "v6"];
  return (
    <>
      <Seo title={t("about.title")} />
      <PageHead eyebrow={t("brand.short")} title={t("about.title")} subtitle={t("about.tag")} />

      {/* INTRO */}
      <section className="amu-section" data-testid="about-intro">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img alt="" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80" style={{ width: "100%", borderRadius: 22 }} loading="lazy" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <span className="amu-eyebrow">{t("about.title")}</span>
              <h2 className="amu-h2">{t("brand.name")}</h2>
              <p className="amu-section-sub">{t("about.intro")}</p>
              <div className="d-flex align-items-center gap-2 mt-4">
                <FaMapMarkerAlt style={{ color: "var(--amu-saffron)" }} />
                <span style={{ color: "var(--amu-ink-soft)" }}>{t("about.address")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION / HISTORY */}
      <section className="amu-section bg-cream" data-testid="vision-mission">
        <div className="container">
          <div className="row g-4">
            {[
              { k: "vision", Icon: FaEye },
              { k: "mission", Icon: FaBullseye },
              { k: "history", Icon: FaHistory },
            ].map((c, i) => (
              <div className="col-md-4" key={c.k} data-aos="fade-up" data-aos-delay={i * 120}>
                <div className="amu-card" data-testid={`about-${c.k}`}>
                  <div className={`amu-card-icon ${c.k === "vision" ? "emerald" : c.k === "mission" ? "rose" : "gold"}`}><c.Icon /></div>
                  <h4>{t(`about.${c.k}_title`)}</h4>
                  <p>{t(`about.${c.k}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="amu-section" data-testid="values-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="amu-eyebrow">{t("about.values_title")}</span>
            <h2 className="amu-h2">{t("about.values_title")}</h2>
          </div>
          <div className="row g-3 justify-content-center">
            {values.map((v, i) => (
              <div className="col-auto" key={v} data-aos="zoom-in" data-aos-delay={i * 60}>
                <div className="amu-chip" style={{ padding: "12px 22px", fontSize: 15 }}>
                  {t(`about.values.${v}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="amu-section bg-cream" data-testid="location-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="amu-eyebrow">{t("about.location_title")}</span>
              <h2 className="amu-h2">Melpakkam Village</h2>
              <p className="amu-section-sub">{t("about.address")}</p>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Melpakkam,+Tindivanam,+Villupuram,+Tamil+Nadu&output=embed"
                style={{ width: "100%", height: 380, borderRadius: 22, border: 0 }}
                loading="lazy"
                data-testid="about-map"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
