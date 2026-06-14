import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaHandHoldingHeart, FaLeaf, FaUsers, FaSeedling, FaGraduationCap, FaShieldAlt, FaHandsHelping } from "react-icons/fa";
import Seo from "../components/Seo";
import StatsBand from "../components/StatsBand";

const FEATURES = [
  { k: "women", Icon: FaHandHoldingHeart, klass: "rose" },
  { k: "children", Icon: FaGraduationCap, klass: "" },
  { k: "nature", Icon: FaLeaf, klass: "emerald" },
  { k: "village", Icon: FaUsers, klass: "gold" },
];

const PROGRAM_IMG = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
];

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Seo title={t("hero.title")} />

      {/* HERO */}
      <section className="amu-hero overflow-hidden" data-testid="hero-section">
        <div className="container amu-hero-inner">
          <span className="amu-hero-tag mb-5" data-aos="fade-up">{t("hero.tag")}</span>
          <h1 data-aos="fade-up" data-aos-delay="100">{t("hero.title")}</h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="200">{t("hero.subtitle")}</p>
          <div className="amu-hero-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/volunteer" className="amu-btn amu-btn-primary" data-testid="hero-cta-join">
              {t("hero.cta_join")} <FaArrowRight />
            </Link>
            <Link to="/donate" className="amu-btn amu-btn-emerald" data-testid="hero-cta-donate">
              {t("hero.cta_donate")}
            </Link>
            <Link to="/volunteer" className="amu-btn amu-btn-ghost" data-testid="hero-cta-volunteer">
              {t("hero.cta_volunteer")}
            </Link>
          </div>
        </div>
        <div className="amu-hero-badge" data-aos="fade-left" data-aos-delay="500">
          <div>
            <div className="num">1,850+</div>
            <div className="lbl">{t("stats.women")}</div>
          </div>
          <FaSeedling style={{ color: "var(--amu-emerald)", fontSize: 32 }} />
        </div>
      </section>

      {/* INTRO */}
      <section className="amu-section" data-testid="intro-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="amu-eyebrow">{t("brand.short")}</span>
              <h2 className="amu-h2">{t("home.intro_title")}</h2>
              <p className="amu-section-sub">{t("home.intro_text")}</p>
              <Link to="/about" className="amu-btn amu-btn-ghost mt-3" data-testid="intro-learn-more">
                {t("common.learn_more")} <FaArrowRight />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="row g-3">
                <div className="col-6">
                  <img alt="" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80" style={{ width: "100%", borderRadius: 18, height: 220, objectFit: "cover" }} loading="lazy" />
                </div>
                <div className="col-6 pt-4">
                  <img alt="" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80" style={{ width: "100%", borderRadius: 18, height: 220, objectFit: "cover" }} loading="lazy" />
                </div>
                <div className="col-6">
                  <img alt="" src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80" style={{ width: "100%", borderRadius: 18, height: 220, objectFit: "cover" }} loading="lazy" />
                </div>
                <div className="col-6 pt-4">
                  <img alt="" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80" style={{ width: "100%", borderRadius: 18, height: 220, objectFit: "cover" }} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="amu-section bg-cream" data-testid="features-section">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="amu-eyebrow">{t("home.feature_title")}</span>
            <h2 className="amu-h2">{t("home.feature_title")}</h2>
          </div>
          <div className="row g-4">
            {FEATURES.map((f, i) => (
              <div className="col-md-6 col-lg-3" key={f.k} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="amu-card" data-testid={`feature-${f.k}`}>
                  <div className={`amu-card-icon ${f.klass}`}><f.Icon /></div>
                  <h4>{t(`home.features.${f.k}.title`)}</h4>
                  <p>{t(`home.features.${f.k}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="amu-section" data-testid="programs-preview">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-5" data-aos="fade-up">
            <div>
              <span className="amu-eyebrow">{t("nav.programs")}</span>
              <h2 className="amu-h2">{t("programs.tag")}</h2>
            </div>
            <Link to="/programs" className="amu-btn amu-btn-ghost">
              {t("common.read_more")} <FaArrowRight />
            </Link>
          </div>
          <div className="row g-4">
            {["p1", "p2", "p3"].map((p, i) => (
              <div className="col-md-4" key={p} data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="amu-program-tile">
                  <div className="img" style={{ backgroundImage: `url(${PROGRAM_IMG[i]})` }} />
                  <div className="body">
                    <span className="tag">Program {i + 1}</span>
                    <h4>{t(`programs.list.${p}.title`)}</h4>
                    <p style={{ color: "var(--amu-ink-soft)", fontSize: 14 }}>{t(`programs.list.${p}.desc`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="amu-section-sm" data-testid="stats-section">
        <div className="container">
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="amu-eyebrow">{t("home.impact_sub")}</span>
            <h2 className="amu-h2 text-white" style={{ color: "var(--amu-ink)" }}>{t("home.impact_title")}</h2>
          </div>
          <StatsBand />
        </div>
      </section>

      {/* CTA */}
      <section className="amu-section" data-testid="cta-section">
        <div className="container">
          <div className="amu-cta-band" data-aos="zoom-in">
            <h2 className="amu-h2">{t("home.join_title")}</h2>
            <p>{t("home.join_text")}</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/donate" className="amu-btn amu-btn-primary">{t("hero.cta_donate")}</Link>
              <Link to="/volunteer" className="amu-btn amu-btn-ghost" style={{ borderColor: "#fff", color: "#fff" }}>{t("hero.cta_volunteer")}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
