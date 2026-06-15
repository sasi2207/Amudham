import { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { FaMapMarkerAlt,FaWhatsapp, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      Swal.fire({ icon: "warning", title: t("volunteer.form.required"), confirmButtonColor: "#d97706" });
      return;
    }
    Swal.fire({
      icon: "success",
      title: t("contact.form.success_title"),
      text: t("contact.form.success_text"),
      confirmButtonColor: "#d97706",
    });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      {/* <Seo title={t("contact.title")} /> */}
      <PageHead eyebrow={t("nav.contact")} title={t("contact.title")} subtitle={t("contact.tag")} />

      <section className="amu-section overflow-hidden" data-testid="contact-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="amu-eyebrow">{t("contact.info_title")}</span>
              <h2 className="amu-h2">{t("contact.tag")}</h2>

              <ul className="list-unstyled mt-4" style={{ fontSize: 15, lineHeight: 1.9, color: "var(--amu-ink-soft)" }}>
                <li className="d-flex gap-3 mb-3">
                  <FaMapMarkerAlt style={{ color: "var(--amu-saffron)", marginTop: 5 }} />
                <a
                href="https://maps.google.com/?q=Melpakkam,Villupuram,Tamil Nadu"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-dark"
              >
                417, Main Road, Melpakkam Village,
                Ayyanthoppu Post, Tindivanam (TK),
                Villupuram District,
                Tamil Nadu – 604307.
              </a>
                </li>
                <li className="d-flex gap-3 mb-3">
                  <FaPhone style={{ color: "var(--amu-saffron)", marginTop: 5 }} />
                  <a
                href="tel:+917598119954"
                className="text-decoration-none text-dark"
              >
                   +91 7598119954
              </a>
                </li>
                <li className="d-flex gap-3 mb-3">
                
                                <FaWhatsapp
                                  className="me-3 mt-1 " style={{ color: "var(--amu-saffron)"}}
                                />
                                <a
                                  href="https://wa.me/919600239955"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-decoration-none text-dark"
                                >+91 9600239955
                                </a>
                            
                </li>
                <li className="d-flex gap-3 mb-3">
                  <FaEnvelope style={{ color: "var(--amu-saffron)", marginTop: 5 }} />
                  <a
                href="mailto:amudhamwelfare@gmail.com"
                className="text-decoration-none text-dark"
              >
                amudhamwelfare@gmail.com
              </a>
                </li>
              </ul>

              <div className="mt-4">
                <div style={{ fontSize: 13, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--amu-ink-soft)", marginBottom: 10 }}>{t("contact.follow")}</div>
                <div className="amu-social" style={{ marginTop: 0 }}>
                  <a href="#" data-testid="c-fb" className="text-warning"><FaFacebookF /></a>
                  <a href="#" data-testid="c-ig"  className="text-warning"><FaInstagram /></a>
                  <a href="#" data-testid="c-yt"  className="text-warning"><FaYoutube /></a>
                  <a href="#" data-testid="c-tw" className="text-warning"><FaTwitter /></a>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <form className="amu-form amu-card" style={{ padding: 36 }} onSubmit={onSubmit} data-testid="contact-form" noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label>{t("contact.form.name")}</label>
                    <input className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid="ct-name" />
                  </div>
                  <div className="col-md-6">
                    <label>{t("contact.form.email")}</label>
                    <input type="email" className="form-control" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="ct-email" />
                  </div>
                  <div className="col-md-6">
                    <label>{t("contact.form.phone")}</label>
                    <input className="form-control" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} data-testid="ct-phone" />
                  </div>
                  <div className="col-md-6">
                    <label>{t("contact.form.subject")}</label>
                    <input className="form-control" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} data-testid="ct-subject" />
                  </div>
                  <div className="col-12">
                    <label>{t("contact.form.message")}</label>
                    <textarea rows="5" className="form-control" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} data-testid="ct-message" />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="amu-btn amu-btn-primary" data-testid="ct-submit">
                      {t("contact.form.submit")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="amu-section-sm overflow-hidden" data-testid="contact-map-section">
        <div className="container">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Melpakkam,+Tindivanam,+Villupuram,+Tamil+Nadu&output=embed"
            style={{ width: "100%", height: 420, borderRadius: 22, border: 0 }}
            loading="lazy"
            data-testid="contact-map"
          />
        </div>
      </section>
    </>
  );
}
