import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaWhatsapp,
} from "react-icons/fa";

import img from "../images/Amudham -T.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="text-white pt-5 pb-3"
      style={{
        background:
          "linear-gradient(135deg, #202020, #1d1a21, #140e11)",
      }}
    >
      <div className="container">

        {/* Main Footer */}
        <div className="row gy-5 text-center text-lg-start">

          {/* Logo Section */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <img
                src={img}
                alt="Amudham"
                className="img-fluid rounded-4"
                style={{
                  maxWidth: "240px",
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="text-light small">
              {t("footer.tagline")}
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-3">

              <a
                href="#"
                className="text-white fs-5"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="text-white fs-5"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-white fs-5"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="text-white fs-5"
              >
                <FaTwitter />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold mb-4 text-secondary">
              {t("footer.quick_links")}
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-decoration-none text-light"
                >
                  {t("nav.about")}
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/programs"
                  className="text-decoration-none text-light"
                >
                  {t("nav.programs")}
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/activities"
                  className="text-decoration-none text-light"
                >
                  {t("nav.activities")}
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/gallery"
                  className="text-decoration-none text-light"
                >
                  {t("nav.gallery")}
                </Link>
              </li>

              <li>
                <Link
                  to="/stories"
                  className="text-decoration-none text-light"
                >
                  {t("nav.stories")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Donate */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="fw-bold mb-4  text-secondary">
              {t("nav.donate")}
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/donate"
                  className="text-decoration-none text-light"
                >
                  {t("donate.categories.education.title")}
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/donate"
                  className="text-decoration-none text-light"
                >
                  {t("donate.categories.women.title")}
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/donate"
                  className="text-decoration-none text-light"
                >
                  {t("donate.categories.trees.title")}
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/donate"
                  className="text-decoration-none text-light"
                >
                  {t("donate.categories.rural.title")}
                </Link>
              </li>

              <li>
                <Link
                  to="/volunteer"
                  className="text-decoration-none text-light"
                >
                  {t("nav.volunteer")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-12">
            <h5 className="fw-bold mb-4  text-secondary">
              {t("footer.contact")}
            </h5>

            <div className="d-flex mb-3 text-start">
              <FaMapMarkerAlt
                className="me-3 mt-1 text-warning flex-shrink-0"
              />
              <a
                href="https://maps.google.com/?q=Melpakkam,Villupuram,Tamil Nadu"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-light"
              >
                417, Main Road, Melpakkam Village,
                Ayyanthoppu Post, Tindivanam (TK),
                Villupuram District,
                Tamil Nadu – 604307.
              </a>
            </div>

            <div className="d-flex mb-3">
              <FaPhone
                className="me-3 mt-1 text-warning"
              />
              <a
                href="tel:+917598119954"
                className="text-decoration-none text-light"
              >
                +91 7598119954
              </a>
            </div>

            <div className="d-flex mb-3">
              <FaWhatsapp
                className="me-3 mt-1 text-warning"
              />
              <a
                href="https://wa.me/919600239955"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-light"
              >
                +91 9600239955
              </a>
            </div>

            <div className="d-flex">
              <FaEnvelope
                className="me-3 mt-1 text-warning"
              />
              <a
                href="mailto:amudhamwelfare@gmail.com"
                className="text-decoration-none text-light"
              >
                amudhamwelfare@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <hr className="border-secondary my-4" />

        <div className="row align-items-center text-center text-md-start">

          <div className="col-md-6 mb-3 mb-md-0">
            <small>
              © {new Date().getFullYear()}{" "}
              {t("brand.name")} ·{" "}
              {t("footer.rights")}
            </small>
          </div>

          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3 flex-wrap">

              <Link
                to="/privacy"
                className="text-decoration-none text-light"
              >
                {t("footer.privacy")}
              </Link>

              <Link
                to="/terms"
                className="text-decoration-none text-light"
              >
                {t("footer.terms")}
              </Link>

              <span className="small">
                {t("footer.made_with")}{" "}
                <FaHeart className="text-danger" />
              </span>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}