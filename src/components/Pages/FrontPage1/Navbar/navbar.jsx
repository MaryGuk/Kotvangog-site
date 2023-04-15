import { NavLink } from "react-router-dom";
import "./navbar.css";
import { NavbarWrapper } from "./styled";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar">
      <div>
        <button onClick={() => changeLanguage("en")}> EN </button>
        <button onClick={() => changeLanguage("ru")}> RU </button>{" "}
      </div>

      {/* <div> {t("mainPage.title")}</div> */}

      <div className="logo"> kotvangog</div>
      <NavbarWrapper>
        {[
          { path: "/home", title: t("mainPage.navItem1") },
          { path: "/products", title: t("mainPage.navItem2") },
          { path: "/reviews", title: t("mainPage.navItem3") },
        ].map(({ path, title }, idx) => (
          <div className="navbar-item" key={idx}>
            <NavLink to={path}>{title}</NavLink>
          </div>
        ))}
      </NavbarWrapper>
    </nav>
  );
};

export default Navbar;
