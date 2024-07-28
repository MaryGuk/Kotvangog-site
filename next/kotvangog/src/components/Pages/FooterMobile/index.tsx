import {
  FooterMobileWrapper,
  FooterMobileGeneral,
  FooterMobileTitleWrapper,
  FooterMobileTitle,
  FooterMobileInformation,
  FooterMobileLinkContainer,
  FooterMobileLink,
  FooterMobileWorkSchedule,
  FooterSchedule,
  FooterWorkDays,
  FooterWorkTime,
  FooterMobileMessenger,
  FooterMobileContacts,
  FooterEmail,
  FooterEmailName,
  FooterPhone,
  FooterPhoneNumber,
} from './styled';
import { Box } from '@mui/material';
// import './footer-mobile.css';
// import { Link } from 'react-router-dom';
import Link from 'next/link'
import {
  telegramLink,
  whatsappLink,
  vkLink,
  instagramLink,
  mailLink,
} from '@/constants/links';
import { ReactComponent as TelegramLogo } from '@/images/messenger/telegram.svg';
import { ReactComponent as WhatsAppLogo } from '@/images/messenger/whatsapp.svg';
import { ReactComponent as VkLogo } from '@/images/messenger/vk.svg';
import { ReactComponent as InstagramLogo } from '@/images/messenger/instagram.svg';
import { ReactComponent as EmailLogo } from '@/images/messenger/email.svg';
import { useTheme } from '@mui/material/styles';

const getMessengersData = ({ fill }) => [
  { link: telegramLink, icon: <TelegramLogo fill={fill} /> },
  { link: whatsappLink, icon: <WhatsAppLogo fill={fill} /> },
  { link: vkLink, icon: <VkLogo fill={fill} /> },
  { link: instagramLink, icon: <InstagramLogo fill={fill} /> },
  { link: mailLink, icon: <EmailLogo fill={fill} /> },
];

const FooterMobile = () => {
  const { palette } = useTheme();

  return (
    <FooterMobileWrapper>
      <FooterMobileGeneral>
        <FooterMobileTitleWrapper>
          <FooterMobileTitle>
            Портреты и картины маслом на заказ
          </FooterMobileTitle>
        </FooterMobileTitleWrapper>

        <FooterMobileInformation>
          <FooterMobileLinkContainer>
            <FooterMobileLink>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                href="/oil-portrait"
              >
                Портрет маслом
              </Link>
            </FooterMobileLink>
            <FooterMobileLink>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                href="/products"
              >
                Арт стили
              </Link>
            </FooterMobileLink>
            <FooterMobileLink>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                href="/likeness-portrait"
              >
                Портрет в образе
              </Link>
            </FooterMobileLink>
            <FooterMobileLink>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                href="/reviews"
              >
                Отзывы
              </Link>
            </FooterMobileLink>
          </FooterMobileLinkContainer>

          <FooterMobileMessenger>
            {getMessengersData({ fill: palette.primary.main }).map(
              ({ link, icon }, idx) => (
                <Box key={idx}>
                  <a href={link} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </Box>
              )
            )}
          </FooterMobileMessenger>

          <FooterMobileWorkSchedule>
            <FooterSchedule> График работы:</FooterSchedule>
            <FooterWorkDays> Пн — Пт:</FooterWorkDays>
            <FooterWorkTime> с 09:00 до 20:00</FooterWorkTime>
            <FooterWorkDays> Сб: с 11:00 до 18:00</FooterWorkDays>
          </FooterMobileWorkSchedule>

          <FooterMobileContacts>
            <FooterEmail>Email:</FooterEmail>
            <FooterEmailName>Kotvangog@gmail.ru</FooterEmailName>
            <FooterPhone>Телефон:</FooterPhone>
            <FooterPhoneNumber>
              <a
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  fontFamily: 'Century Gothic',
                }}
                href="tel:+79933600710"
              >
                +79933600710
              </a>
            </FooterPhoneNumber>
          </FooterMobileContacts>
        </FooterMobileInformation>
      </FooterMobileGeneral>
    </FooterMobileWrapper>
  );
};

export default FooterMobile;
