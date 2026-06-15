import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import "@/App.css";
import logo from "../images/Amudham -T.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("amudham_lang", lng);
    document.body.classList.toggle("lang-ta", lng === "ta");
    document.documentElement.lang = lng;
  };

  useEffect(() => {
    document.body.classList.toggle("lang-ta", i18n.language === "ta");
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <nav
      className={`amu-navbar fixed-top ${scrolled ? "shadow-sm" : ""}`}
      data-testid="main-navbar"
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
      <Link
  to="/"
  className="amu-brand text-decoration-none d-flex align-items-center"
>
  <img
    src={logo}
    alt="Amudham Women Welfare Trust"
    className="amu-logo"
  />

  <div className="amu-brand-text ms-2">
  <span className="full d-block fw-bold brand-gradient-text">
    {t("brand.name")}
  </span>

  <small className="brand-location">
    Melpakkam • Villupuram
  </small>
</div>
</Link>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex align-items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {t("nav.home")}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {t("nav.about")}
          </NavLink>

          {/* Dropdown */}
          <div
            className="position-relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="nav-link border-0 bg-transparent d-flex align-items-center gap-2"
            >
              {t("nav.programs")}
              <FaChevronDown size={12} />
            </button>

            {dropdownOpen && (
              <div
                className="position-absolute bg-white shadow rounded py-2"
                style={{
                  minWidth: "240px",
                  top: "100%",
                  left: 0,
                  zIndex: 9999,
                }}
              >
                <Link
                  to="/programs"
                  className="dropdown-item py-2 px-3 text-decoration-none"
                >
                  {t("nav.programs")}
                </Link>

                <Link
                  to="/activities"
                  className="dropdown-item py-2 px-3 text-decoration-none"
                >
                  {t("nav.activities")}
                </Link>

                <Link
                  to="/gallery"
                  className="dropdown-item py-2 px-3 text-decoration-none"
                >
                  {t("nav.gallery")}
                </Link>

                <Link
                  to="/stories"
                  className="dropdown-item py-2 px-3 text-decoration-none"
                >
                  {t("nav.stories")}
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/volunteer"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {t("nav.volunteer")}
          </NavLink>

          <NavLink
            to="/donate"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {t("nav.donate")}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            {t("nav.contact")}
          </NavLink>

          {/* Language Switch */}
         
        </div>

        {/* Mobile Toggle */}
        <button
          className="d-lg-none btn p-2"
          onClick={() => setOpen(!open)}
          style={{
            color: "var(--amu-ink)",
            fontSize: "24px",
          }}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="d-lg-none bg-white border-top"
          style={{
            padding: "15px 0",
          }}
        >
          <div className="container">
            <NavLink to="/" end className="d-block py-2 nav-link">
              {t("nav.home")}
            </NavLink>

            <NavLink to="/about" className="d-block py-2 nav-link">
              {t("nav.about")}
            </NavLink>

            {/* Mobile Dropdown */}
            <div className="py-2">
              <div
                className="fw-bold mb-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  cursor: "pointer",
                }}
              >
                {t("nav.programs")} ▼
              </div>

              {dropdownOpen && (
                <div className="ps-3">
                  <NavLink
                    to="/programs"
                    className="d-block py-2 text-decoration-none"
                  >
                    {t("nav.programs")}
                  </NavLink>

                  <NavLink
                    to="/activities"
                    className="d-block py-2 text-decoration-none"
                  >
                    {t("nav.activities")}
                  </NavLink>

                  <NavLink
                    to="/gallery"
                    className="d-block py-2 text-decoration-none"
                  >
                    {t("nav.gallery")}
                  </NavLink>

                  <NavLink
                    to="/stories"
                    className="d-block py-2 text-decoration-none"
                  >
                    {t("nav.stories")}
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/volunteer" className="d-block py-2 nav-link">
              {t("nav.volunteer")}
            </NavLink>

            <NavLink to="/donate" className="d-block py-2 nav-link">
              {t("nav.donate")}
            </NavLink>

            <NavLink to="/contact" className="d-block py-2 nav-link">
              {t("nav.contact")}
            </NavLink>

           
          </div>
        </div>
      )}
    </nav>
  );
}