import { useTranslation } from "react-i18next";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

const IMGS = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1573164574230-db1d5e960238?auto=format&fit=crop&w=900&q=80",
];

export default function Programs() {
  const { t } = useTranslation();
  const programs = ["p1", "p2", "p3", "p4", "p5"];
  return (
    <>
      <Seo title={t("programs.title")} />
      <PageHead eyebrow={t("nav.programs")} title={t("programs.title")} subtitle={t("programs.tag")} />

      <section className="amu-section overflow-hidden" data-testid="programs-section">
        <div className="container">
          <div className="row g-4">
            {programs.map((p, i) => (
              <div className={`col-md-6 ${i === 0 ? "col-lg-6" : "col-lg-6"}`} key={p} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="amu-program-tile" data-testid={`program-${p}`}>
                  <div className="img" style={{ backgroundImage: `url(${IMGS[i]})`, height: 260 }} />
                  <div className="body" style={{ padding: 28 }}>
                    <span className="tag">Program 0{i + 1}</span>
                    <h4 style={{ fontSize: "1.4rem" }}>{t(`programs.list.${p}.title`)}</h4>
                    <p style={{ color: "var(--amu-ink-soft)" }}>{t(`programs.list.${p}.desc`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
