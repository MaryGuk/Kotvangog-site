import {
  MainButtonWrapper,
  MainButtonItem,
  ModalMessenger,
  ModalMessengerContent,
  ModalIcons,
  ModalTitle,
  MainButtonContainer,
} from './styled';
import Modal from '../../Modal/modal';
import { useState } from 'react';

const MainButton = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <MainButtonWrapper>
      <MainButtonContainer>
        <MainButtonItem>
          <div onClick={() => setModalActive(true)}> Получить консультацию</div>
        </MainButtonItem>

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
                  />
                </ModalIcons>
              </a>
              <a href="https://t.me/kot_vangog" target="blank">
                <ModalIcons>
                  <img
                    width="40px"
                    height="40px"
                    src="/images/modal-icons/telegram.svg"
                  />
                </ModalIcons>
              </a>
              <a href="https://vk.com/lubov0011" target="blank">
                <ModalIcons>
                  <img
                    width="40px"
                    height="40px"
                    src="/images/modal-icons/vk.svg"
                  />
                </ModalIcons>
              </a>
            </ModalMessengerContent>
          </ModalMessenger>
        </Modal>
      </MainButtonContainer>
    </MainButtonWrapper>
  );
};

export default MainButton;
