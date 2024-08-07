import { Box } from '@mui/material';
import {
  LikenessPortraitWrapper2,
  LikenessPortraitGeneral2,
  LikenessContent2,
  LikenessContent22,
  LikenessContentDescription2,
  LikenessContentPhoto2,
  ButtonContainer,
  FirstButtonLikeness,
  SecondButtonLikeness,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  LikenessMobileContent22,
  LikenessMobileTextPart12,
  LikenessMobileTextPart22,
  LikenessMobileTextPart32,
  LikenessButton,
  LikenessDesktopInfo2,
  LikenessDesktopInfoIcon2,
  LikenessDesktopInfoOne2,
  LikenessDesktopInfoText2,
  LikenessDesktopInfoTwo2,
  LikenessDesktopInfoThree2,
  LikenessDesktopDescription12,
  LikenessDesktopDescription22,
  LikenessDesktopDescription32,
} from './styled';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../../../components/Modal/modal';
import { Link } from 'react-router-dom';
import './likeness-portrait2.css';
import { isMobile } from 'react-device-detect';
import LikenessButtonMobile from '../../../../components/Button/LikenessButton';
import LikenessTitle2 from './LikenessTitle2/likeness-title2';

const LikenessPortrait = () => {
  const { t } = useTranslation();
  const [modalActive, setModalActive] = useState(false);
  return (
    <LikenessPortraitWrapper2>
      <LikenessPortraitGeneral2>
        <LikenessTitle2 />
        <LikenessMobileContent22>
          <LikenessMobileTextPart12>
            Не знаете какой образ подойдет?
          </LikenessMobileTextPart12>
          <LikenessMobileTextPart22>
            Мы бесплатно подберем 7-8 грубых макетов под ваше фото.
          </LikenessMobileTextPart22>
          <LikenessMobileTextPart32>
            Вы сами выберите образ который вам понравится.
          </LikenessMobileTextPart32>
        </LikenessMobileContent22>
        <LikenessContent2>
          <LikenessContent22>
            <LikenessContentPhoto2>
              <img
                src={
                  isMobile
                    ? 'https://www.dropbox.com/scl/fi/sci2tymgovy0nk8l18cev/2_4353_800px_progressive.jpg?rlkey=jz2z6dflhaj3eqh7vk9izs5z1&dl=0&raw=1'
                    : 'https://www.dropbox.com/scl/fi/41rriflyaxngeqi4ruct9/2_4353_1400px_progressive.jpg?rlkey=alftcvp5saam6k8w00iccdpxd&dl=0&raw=1'
                }
                width="100%"
                height="100%"
                alt=""
              />
            </LikenessContentPhoto2>
            <LikenessContentDescription2>
              <LikenessDesktopInfo2>
                <LikenessDesktopInfoOne2>
                  <LikenessDesktopInfoIcon2>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                      alt=""
                    />
                  </LikenessDesktopInfoIcon2>
                  <LikenessDesktopInfoText2>
                    Бесплатно подберем 7-8 грубых макетов.
                  </LikenessDesktopInfoText2>
                </LikenessDesktopInfoOne2>

                <LikenessDesktopInfoTwo2>
                  <LikenessDesktopInfoIcon2>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                      alt=""
                    />
                  </LikenessDesktopInfoIcon2>
                  <LikenessDesktopInfoText2>
                    Более 600 тематических образов.
                  </LikenessDesktopInfoText2>
                </LikenessDesktopInfoTwo2>

                <LikenessDesktopInfoThree2>
                  <LikenessDesktopInfoIcon2>
                    <img
                      width="20px"
                      height="20px"
                      src="/images/background/ellipse2.png"
                      alt=""
                    />
                  </LikenessDesktopInfoIcon2>
                  <LikenessDesktopInfoText2>
                    Портретное сходство сохраняем на 100%
                  </LikenessDesktopInfoText2>
                </LikenessDesktopInfoThree2>
              </LikenessDesktopInfo2>

              <LikenessDesktopDescription12>
                Лучший способ удивить!
              </LikenessDesktopDescription12>
              <LikenessDesktopDescription22>
                Картина - это уже эффектный подарок, а картина в образе - это
                ещё и море улыбок, и добрая, долгая память.
              </LikenessDesktopDescription22>
              <LikenessDesktopDescription32>
                Если вам хочется большего, нежели перенос фото на холст —
                обратите внимание на эти работы.
              </LikenessDesktopDescription32>

              <ButtonContainer>
                <Box>
                  <Link to="/likeness-portrait" className="link-likeness">
                    <SecondButtonLikeness>
                      Смотреть все работы
                    </SecondButtonLikeness>
                  </Link>
                </Box>

                <Box>
                  <FirstButtonLikeness onClick={() => setModalActive(true)}>
                    {t('mainPage.button')}
                  </FirstButtonLikeness>
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
            </LikenessContentDescription2>
            <LikenessButton>
              <LikenessButtonMobile />
            </LikenessButton>
          </LikenessContent22>
        </LikenessContent2>
      </LikenessPortraitGeneral2>
    </LikenessPortraitWrapper2>
  );
};

export default LikenessPortrait;
