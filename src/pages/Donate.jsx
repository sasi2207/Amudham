import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaHandHoldingHeart, FaLeaf, FaUsers, FaCopy } from "react-icons/fa";
import Swal from "sweetalert2";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

const CATEGORIES = [
  { k: "education", Icon: FaGraduationCap, klass: "gold" },
  { k: "women", Icon: FaHandHoldingHeart, klass: "rose" },
  { k: "trees", Icon: FaLeaf, klass: "emerald" },
  { k: "rural", Icon: FaUsers, klass: "" },
];

export default function Donate() {
  const { t } = useTranslation();
  const upi = "amudhamwelfare@sbi";
  const bank = {
    name: "State Bank of India",
    ac_name: "Amudham Women Welfare Trust",
    ac_no: "43084718559",
    ifsc: "SBIN0000929",
    upiId:"amudhamwelfare@sbi",
    branch: "Tindivanam",
  };
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    Swal.fire({ icon: "success", title: "Copied!", timer: 1200, showConfirmButton: false });
  };

  return (
    <>
      <Seo title={t("donate.title")} />
      <PageHead eyebrow={t("nav.donate")} title={t("donate.title")} subtitle={t("donate.tag")} />

      <section className="amu-section overflow-hidden" data-testid="donate-section">
        <div className="container">
          <p className="amu-section-sub text-center mx-auto" data-aos="fade-up" style={{ maxWidth: 720 }}>
            {t("donate.intro")}
          </p>

          <div className="row g-4 mt-3 align-items-start">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="amu-qr-box" data-testid="qr-box">
                <h4 style={{ marginBottom: 14 }}>{t("donate.qr_label")}</h4>
                <div className="qr" data-testid="qr-placeholder">
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 48, color: "var(--amu-saffron)" }}>⌗</div>
                    <div>QR code placeholder</div>
                    <div style={{ fontSize: 11, marginTop: 6, color: "var(--amu-ink-soft)" }}>Replace with real QR</div>
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center justify-content-between" style={{ background: "var(--amu-cream)", padding: "12px 16px", borderRadius: 12 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--amu-ink-soft)", letterSpacing: ".15em", textTransform: "uppercase" }}>{t("donate.upi_label")}</div>
                    <div style={{ fontWeight: 700 }} data-testid="upi-id">{upi}</div>
                  </div>
                  <button className="amu-btn amu-btn-ghost" style={{ padding: "8px 14px" }} onClick={() => copy(upi)} data-testid="copy-upi">
                    <FaCopy /> Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="amu-donate-card" data-testid="bank-card">
                <h4>{t("donate.bank_title")}</h4>
                <table className="table mt-3" style={{ marginBottom: 0 }}>
                  <tbody>
                    <tr><td style={{ color: "var(--amu-ink-soft)" }}>{t("donate.bank.name")}</td><td style={{ fontWeight: 600 }}>{bank.name}</td></tr>
                    <tr><td style={{ color: "var(--amu-ink-soft)" }}>{t("donate.bank.ac_name")}</td><td style={{ fontWeight: 600 }}>{bank.ac_name}</td></tr>
                    <tr><td style={{ color: "var(--amu-ink-soft)" }}>{t("donate.bank.ac_no")}</td><td style={{ fontWeight: 600 }}>{bank.ac_no} <button className="btn btn-sm" onClick={() => copy(bank.ac_no)}><FaCopy /></button></td></tr>
                    <tr><td style={{ color: "var(--amu-ink-soft)" }}>{t("donate.bank.ifsc")}</td><td style={{ fontWeight: 600 }}>{bank.ifsc} <button className="btn btn-sm" onClick={() => copy(bank.ifsc)}><FaCopy /></button></td></tr>
                    
                    <tr><td style={{ color: "var(--amu-ink-soft)" }}>{t("donate.bank.branch")}</td><td style={{ fontWeight: 600 }}>{bank.branch}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="amu-section bg-cream overflow-hidden" data-testid="donate-categories">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="amu-eyebrow">{t("donate.categories_title")}</span>
            <h2 className="amu-h2">{t("donate.categories_title")}</h2>
          </div>
          <div className="row g-4">
            {CATEGORIES.map((c, i) => (
              <div className="col-md-6 col-lg-3" key={c.k} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="amu-card" data-testid={`donate-cat-${c.k}`}>
                  <div className={`amu-card-icon ${c.klass}`}><c.Icon /></div>
                  <h4>{t(`donate.categories.${c.k}.title`)}</h4>
                  <p>{t(`donate.categories.${c.k}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
