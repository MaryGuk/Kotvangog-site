import {
  StylesButtonWrapper,
  StylesButtonItem,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  StylesButtonContainer,
} from './styled';
import Modal from '../../Modal/modal';
import { useState } from 'react';

const StylesButton = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <StylesButtonWrapper>
      <StylesButtonContainer>
        <StylesButtonItem>
          <div onClick={() => setModalActive(true)}> Получить консультацию</div>
        </StylesButtonItem>

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
      </StylesButtonContainer>
    </StylesButtonWrapper>
  );
};

export default StylesButton;
