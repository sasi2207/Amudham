export default function PageHead({ eyebrow, title, subtitle }) {
  return (
    <section className="amu-page-head" data-testid="page-head">
      <div className="container">
        {eyebrow && <span className="amu-eyebrow" data-aos="fade-up">{eyebrow}</span>}
        <h1 data-aos="fade-up" data-aos-delay="100">{title}</h1>
        {subtitle && <p className="amu-section-sub" data-aos="fade-up" data-aos-delay="200">{subtitle}</p>}
      </div>
    </section>
  );
}
