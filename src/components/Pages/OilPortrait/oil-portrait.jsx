import { Box } from '@mui/material';
import {
  OilPortraitWrapper,
  OilPortraitGeneral,
  OilContent,
  OilContentPhoto,
  OilContentDescription,
  OilContent2,
  ButtonContainer,
  FirstButton,
  SecondButton,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  OilButton,
  OilMobileContent,
  OilMobileText,
  OilDesktopInfo,
  OilDesktopInfoIcon,
  OilDesktopInfoText,
  OilDesktopInfoThree,
  OilDesktopDescription1,
  OilDesktopDescription2,
  OilDesktopDescription3,
} from './styled';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OilTitle from './OilTitle/OilTitle';
import Modal from '../../../components/Modal/modal';
import { Link } from 'react-router-dom';
import './oil-portarait.css';
import { isMobile } from 'react-device-detect';
import LikenessButtonMobile from '../../Button/LikenessButton';

const OilPortrait = ({
  title,
  imageMobile,
  imageDesktop,
  advantages,
  descriptionMobile,
  descriptionDesktop,
  linkToPage,
  customMobileDescription,
  customMobileTitle,
}) => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <OilPortraitWrapper id="/oil-portrait">
      <OilPortraitGeneral>
        {customMobileTitle || <OilTitle titleText={title} />}
        {customMobileDescription || (
          <OilMobileContent>
            <OilMobileText>{descriptionMobile}</OilMobileText>
          </OilMobileContent>
        )}
        <OilContent>
          <OilContent2>
            <OilContentPhoto>
              <img
                src={isMobile ? imageMobile : imageDesktop}
                height="100%"
                loading="lazy"
                decoding="async"
                alt=""
              />
            </OilContentPhoto>
            <OilButton>
              <LikenessButtonMobile />
            </OilButton>
            <OilContentDescription>
              <OilDesktopInfo>
                {advantages.map((advantage, idx, arr) => (
                  <OilDesktopInfoThree
                    key={advantage}
                    paddingBottom={idx === arr - 1 ? '0px' : '20px'}
                  >
                    <OilDesktopInfoIcon>
                      <img
                        width="20px"
                        height="20px"
                        src="/images/background/ellipse2.png"
                        alt=""
                      />
                    </OilDesktopInfoIcon>
                    <OilDesktopInfoText>{advantage}</OilDesktopInfoText>
                  </OilDesktopInfoThree>
                ))}
              </OilDesktopInfo>
              {descriptionDesktop[0] && (
                <OilDesktopDescription1 bold={descriptionDesktop[0].bold}>
                  {descriptionDesktop[0].text}
                </OilDesktopDescription1>
              )}
              {descriptionDesktop[1] && (
                <OilDesktopDescription2 bold={descriptionDesktop[1].bold}>
                  {descriptionDesktop[1].text}
                </OilDesktopDescription2>
              )}
              {descriptionDesktop[2] && (
                <OilDesktopDescription3 bold={descriptionDesktop[2].bold}>
                  {descriptionDesktop[2].text}
                </OilDesktopDescription3>
              )}
              <ButtonContainer>
                <Box>
                  <Link to={linkToPage} className="link-oil">
                    <FirstButton>Смотреть все работы</FirstButton>
                  </Link>
                </Box>
                <Box>
                  <SecondButton onClick={() => setModalActive(true)}>
                    {t('mainPage.button')}
                  </SecondButton>
                </Box>

                <Modal active={modalActive} setActive={setModalActive}>
                  <ModalTitle>
                    Выберите мессенджер, в котором вам будет удобно вести диалог
                  </ModalTitle>
                  <ModalMessenger>
                    <ModalMessengerContent>
                      <a
                        href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                        target="blank"
                      >
                        <ModalIcons>
                          <img
                            width="40px"
                            height="40px"
                            src="/images/modal-icons/whatsapp.svg"
                            alt=""
                          />
                        </ModalIcons>
                      </a>
                      <a href="https://t.me/kot_vangog" target="blank">
                        <ModalIcons>
                          <img
                            width="40px"
                            height="40px"
                            src="/images/modal-icons/telegram.svg"
                            alt=""
                          />
                        </ModalIcons>
                      </a>
                      <a href="https://vk.com/lubov0011" target="blank">
                        <ModalIcons>
                          <img
                            width="40px"
                            height="40px"
                            src="/images/modal-icons/vk.svg"
                            alt=""
                          />
                        </ModalIcons>
                      </a>
                    </ModalMessengerContent>
                  </ModalMessenger>
                </Modal>
              </ButtonContainer>
            </OilContentDescription>
          </OilContent2>
        </OilContent>
      </OilPortraitGeneral>
    </OilPortraitWrapper>
  );
};

export default OilPortrait;
