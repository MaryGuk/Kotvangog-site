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

      {/* <div> {t("homePage.title")}</div> */}

      <div className="logo"> kotvangog</div>
      <NavbarWrapper>
        {[
          { path: "/home", title: "Главная" },
          { path: "/products", title: "Продукция" },
          { path: "/reviews", title: "Отзывы" },
        ].map(({ path, title }) => (
          <div className="navbar-item">
            <NavLink to={path}>{title}</NavLink>
          </div>
        ))}
      </NavbarWrapper>
    </nav>
  );
};

export default Navbar;
