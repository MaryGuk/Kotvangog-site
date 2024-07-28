// import './navbar.css';
import { NavbarContent, NavbarLayer, NavbarItemsWrapper, NavbarWrapper, Logo } from './styled';
import { useTranslation } from 'react-i18next';
import NavBarItem from './NavBarItem';
import PhoneAndTime from './PhoneAndTime';
import ContactsWithComment from './ContactsWithComment';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <NavbarWrapper>
      <nav>
        <NavbarContent>
          <NavbarLayer>
            <Logo>kotvangog</Logo>
            <NavbarItemsWrapper>
              {[
                { path: '/home', title: t('mainPage.navItem1') },
                {
                  path: '#',
                  title: t('mainPage.navItem2'),
                  menuItems: [
                    {
                      menuItemTitle: 'Портрет маслом',
                      menuItemPath: '/oil-portrait',
                    },
                    { menuItemTitle: 'Арт стили', menuItemPath: '/products' },
                    {
                      menuItemTitle: 'Портрет в образе',
                      menuItemPath: '/likeness-portrait',
                    },
                  ],
                },
                { path: '/reviews', title: t('mainPage.navItem3') },
              ].map((navBarItemProps, idx) => (
                <NavBarItem key={idx} {...navBarItemProps} />
              ))}
            </NavbarItemsWrapper>
          </NavbarLayer>
          <NavbarLayer>
            <ContactsWithComment commentPosition={3} />
            <PhoneAndTime />
          </NavbarLayer>
        </NavbarContent>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
