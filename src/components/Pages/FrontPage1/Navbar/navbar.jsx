import "./navbar.css";
import { NavbarWrapper } from "./styled";
import { useTranslation } from "react-i18next";
import NavBarItem from "./NavBarItem";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar">
      {/* <div>
        <button onClick={() => changeLanguage("en")}> EN </button>
        <button onClick={() => changeLanguage("ru")}> RU </button>{" "}
      </div> */}

      <div className="logo"> kotvangog</div>
      <NavbarWrapper>
        {[
          { path: "/home", title: t("mainPage.navItem1") },
          {
            path: "/products",
            title: t("mainPage.navItem2"),
            menuItems: [
              {
                menuItemTitle: "Портрет маслом",
                menuItemPath: "/oil-portrait",
              },
              { menuItemTitle: "Арт стили", menuItemPath: "/home" },
              {
                menuItemTitle: "Портрет в образе",
                menuItemPath: "/likeness-portrait",
              },
            ],
          },
          { path: "/reviews", title: t("mainPage.navItem3") },
        ].map((navBarItemProps, idx) => (
          <NavBarItem key={idx} {...navBarItemProps} />
        ))}
      </NavbarWrapper>
    </nav>
  );
};

export default Navbar;
