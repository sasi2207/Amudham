import { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import Seo from "../components/Seo";
import PageHead from "../components/PageHead";

export default function Volunteer() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", mobile: "", email: "", address: "", skills: "", availability: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t("volunteer.form.required");
    if (!/^[0-9]{10}$/.test(form.mobile.trim())) e.mobile = t("volunteer.form.invalid_mobile");
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = t("volunteer.form.invalid_email");
    if (!form.address.trim()) e.address = t("volunteer.form.required");
    if (!form.skills.trim()) e.skills = t("volunteer.form.required");
    if (!form.availability) e.availability = t("volunteer.form.required");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    Swal.fire({
      title: t("volunteer.form.success_title"),
      text: t("volunteer.form.success_text"),
      icon: "success",
      confirmButtonColor: "#d97706",
    });
    setForm({ name: "", mobile: "", email: "", address: "", skills: "", availability: "" });
  };

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <Seo title={t("volunteer.title")} />
      <PageHead eyebrow={t("nav.volunteer")} title={t("volunteer.title")} subtitle={t("volunteer.tag")} />

      <section className="amu-section" data-testid="volunteer-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5" data-aos="fade-right">
              <img alt="" src="https://images.unsplash.com/photo-1593113616828-6f22bca04e2a?auto=format&fit=crop&w=900&q=80" style={{ width: "100%", borderRadius: 22 }} loading="lazy" />
              <p className="amu-section-sub mt-4">{t("volunteer.intro")}</p>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <form className="amu-form amu-card" style={{ padding: 36 }} onSubmit={onSubmit} data-testid="volunteer-form" noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label>{t("volunteer.form.name")}</label>
                    <input className="form-control" value={form.name} onChange={upd("name")} data-testid="vol-name" />
                    {errors.name && <div className="amu-error">{errors.name}</div>}
                  </div>
                  <div className="col-md-6">
                    <label>{t("volunteer.form.mobile")}</label>
                    <input className="form-control" value={form.mobile} onChange={upd("mobile")} data-testid="vol-mobile" maxLength={10} />
                    {errors.mobile && <div className="amu-error">{errors.mobile}</div>}
                  </div>
                  <div className="col-md-6">
                    <label>{t("volunteer.form.email")}</label>
                    <input type="email" className="form-control" value={form.email} onChange={upd("email")} data-testid="vol-email" />
                    {errors.email && <div className="amu-error">{errors.email}</div>}
                  </div>
                  <div className="col-md-6">
                    <label>{t("volunteer.form.availability")}</label>
                    <select className="form-select" value={form.availability} onChange={upd("availability")} data-testid="vol-availability">
                      <option value="">—</option>
                      <option value="weekdays">{t("volunteer.form.availability_options.weekdays")}</option>
                      <option value="weekends">{t("volunteer.form.availability_options.weekends")}</option>
                      <option value="flexible">{t("volunteer.form.availability_options.flexible")}</option>
                    </select>
                    {errors.availability && <div className="amu-error">{errors.availability}</div>}
                  </div>
                  <div className="col-12">
                    <label>{t("volunteer.form.address")}</label>
                    <textarea rows="2" className="form-control" value={form.address} onChange={upd("address")} data-testid="vol-address" />
                    {errors.address && <div className="amu-error">{errors.address}</div>}
                  </div>
                  <div className="col-12">
                    <label>{t("volunteer.form.skills")}</label>
                    <textarea rows="3" className="form-control" value={form.skills} onChange={upd("skills")} data-testid="vol-skills" />
                    {errors.skills && <div className="amu-error">{errors.skills}</div>}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="amu-btn amu-btn-primary" data-testid="vol-submit">
                      {t("volunteer.form.submit")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
