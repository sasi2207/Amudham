import { useTranslation } from "react-i18next";
import { FaChild, FaTree, FaHeartbeat, FaBriefcase, FaGraduationCap, FaLeaf, FaShieldAlt } from "react-icons/fa";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

const ITEMS = [
  { k: "a1", Icon: FaChild, klass: "rose" },
  { k: "a2", Icon: FaTree, klass: "emerald" },
  { k: "a3", Icon: FaHeartbeat, klass: "rose" },
  { k: "a4", Icon: FaBriefcase, klass: "gold" },
  { k: "a5", Icon: FaGraduationCap, klass: "" },
  { k: "a6", Icon: FaLeaf, klass: "emerald" },
  { k: "a7", Icon: FaShieldAlt, klass: "gold" },
];

export default function Activities() {
  const { t } = useTranslation();
  return (
    <>
      {/* <Seo title={t("activities.title")} /> */}
      <PageHead eyebrow={t("nav.activities")} title={t("activities.title")} subtitle={t("activities.tag")} />

      <section className="amu-section overflow-hidden" data-testid="activities-section">
        <div className="container">
          <div className="row g-4">
            {ITEMS.map((a, i) => (
              <div className="col-md-6 col-lg-4" key={a.k} data-aos="zoom-in" data-aos-delay={i * 60}>
                <div className="amu-card" data-testid={`activity-${a.k}`}>
                  <div className={`amu-card-icon ${a.klass}`}><a.Icon /></div>
                  <h4>{t(`activities.list.${a.k}`)}</h4>
                  <p>{t("home.intro_text").slice(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
