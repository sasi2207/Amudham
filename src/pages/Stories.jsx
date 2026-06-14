import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

const AVATARS = {
  s1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  s2: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80",
  s3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  s4: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=400&q=80",
};

export default function Stories() {
  const { t } = useTranslation();
  const items = ["s1", "s2", "s3", "s4"];
  return (
    <>
      <Seo title={t("stories.title")} />
      <PageHead eyebrow={t("nav.stories")} title={t("stories.title")} subtitle={t("stories.tag")} />

      <section className="amu-section" data-testid="stories-section">
        <div className="container">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5500 }}
            loop
            breakpoints={{ 768: { slidesPerView: 2 } }}
            data-testid="stories-swiper"
          >
            {items.map((s) => (
              <SwiperSlide key={s}>
                <div className="amu-card" style={{ padding: 36, minHeight: 320 }} data-testid={`story-${s}`}>
                  <FaQuoteLeft style={{ color: "var(--amu-saffron)", fontSize: 28, marginBottom: 14 }} />
                  <p style={{ fontSize: 17, color: "var(--amu-ink)", fontStyle: "italic", lineHeight: 1.7 }}>
                    "{t(`stories.items.${s}.quote`)}"
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-4 pt-3" style={{ borderTop: "1px solid var(--amu-line)" }}>
                    <img alt="" src={AVATARS[s]} style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }} />
                    <div>
                      <div style={{ fontWeight: 700 }}>{t(`stories.items.${s}.name`)}</div>
                      <div style={{ fontSize: 13, color: "var(--amu-emerald)" }}>{t(`stories.items.${s}.role`)}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div style={{ height: 60 }} />
        </div>
      </section>
    </>
  );
}
