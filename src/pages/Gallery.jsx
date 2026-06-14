import { useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

const PHOTOS = [
  { cat: "women", src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" },
  { cat: "women", src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80" },
  { cat: "students", src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80" },
  { cat: "students", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80" },
  { cat: "health", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" },
  { cat: "health", src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80" },
  { cat: "environment", src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" },
  { cat: "environment", src: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80" },
  { cat: "herbal", src: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80" },
  { cat: "herbal", src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80" },
  { cat: "community", src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80" },
  { cat: "community", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80" },
];

const CATS = ["all", "women", "students", "health", "environment", "herbal", "community"];

export default function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");
  const [idx, setIdx] = useState(-1);

  const items = filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  return (
    <>
      <Seo title={t("gallery.title")} />
      <PageHead eyebrow={t("nav.gallery")} title={t("gallery.title")} subtitle={t("gallery.tag")} />

      <section className="amu-section overflow-hidden" data-testid="gallery-section">
        <div className="container">
          <div className="amu-filter" data-aos="fade-up" data-testid="gallery-filter">
            {CATS.map((c) => (
              <button
                key={c}
                className={filter === c ? "active" : ""}
                onClick={() => setFilter(c)}
                data-testid={`filter-${c}`}
              >
                {c === "all" ? t("gallery.all") : t(`gallery.categories.${c}`)}
              </button>
            ))}
          </div>
          <div className="row g-4">
            {items.map((p, i) => (
              <div className="col-md-6 col-lg-4" key={`${p.src}-${i}`} data-aos="zoom-in" data-aos-delay={(i % 6) * 60}>
                <div
                  className="amu-gallery-item"
                  onClick={() => setIdx(i)}
                  data-testid={`gallery-item-${i}`}
                >
                  <img alt="" src={p.src} loading="lazy" />
                  <div className="amu-gallery-cap">{t(`gallery.categories.${p.cat}`)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={idx >= 0}
        index={idx}
        close={() => setIdx(-1)}
        slides={items.map((p) => ({ src: p.src }))}
      />
    </>
  );
}
