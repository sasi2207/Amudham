import CountUp from "react-countup";
import { useInView } from "../hooks/useInView";
import { useTranslation } from "react-i18next";

const STATS = [
  { k: "women", end: 1850, suffix: "+" },
  { k: "students", end: 3200, suffix: "+" },
  { k: "trees", end: 12500, suffix: "+" },
  { k: "villages", end: 78, suffix: "" },
  { k: "awareness", end: 240, suffix: "+" },
  { k: "volunteers", end: 420, suffix: "+" },
];

export default function StatsBand() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  return (
    <div className="amu-stats-band" data-testid="stats-band" ref={ref}>
      <div className="row g-4">
        {STATS.map((s, i) => (
          <div className="col-6 col-md-4 col-lg-2" key={s.k} data-aos="fade-up" data-aos-delay={i * 80}>
            <div className="amu-stat" data-testid={`stat-${s.k}`}>
              <div className="num">
                {inView ? <CountUp end={s.end} duration={2.4} separator="," /> : "0"}
                <span className="plus">{s.suffix}</span>
              </div>
              <div className="lbl">{t(`stats.${s.k}`)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
