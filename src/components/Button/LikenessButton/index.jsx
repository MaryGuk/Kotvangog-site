import {
  LikenessButtonWrapper,
  LikenessButtonItem,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  LikenessButtonContainer,
} from './styled';
import Modal from '../../Modal/modal';
import { useState } from 'react';

const LikenessButtonMobile = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <LikenessButtonWrapper>
      <LikenessButtonContainer>
        <LikenessButtonItem>
          <div onClick={() => setModalActive(true)}> Получить консультацию</div>
        </LikenessButtonItem>

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
      </LikenessButtonContainer>
    </LikenessButtonWrapper>
  );
};

export default LikenessButtonMobile;
