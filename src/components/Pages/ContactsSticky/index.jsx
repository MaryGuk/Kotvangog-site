import { Box, color } from "@mui/system";
import {
  ContactSticky,
  ContactStickyContainer,
  ContactStickyButtonOneContainer,
  ContactStickyButtonOne,
  ContactStickyButtonTwoContainer,
  ContactStickyButtonTwo,
  ModalTitleContacts,
  ModalMessengerContacts,
  ModalMessengerContentContacts,
  ModalContactsItems,
  ModalContactsName,
  ModalIconsContacts,
} from "./styled";
import { useState } from "react";
import Modal from "../../Modal/modal";

const ContactsSticky = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <ContactSticky>
      <ContactStickyContainer>
        <ContactStickyButtonOneContainer>
          <ContactStickyButtonOne>
            <Box onClick={() => setModalActive(true)}> Написать</Box>
          </ContactStickyButtonOne>
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalTitleContacts>
              Выберите удобный способ связи
            </ModalTitleContacts>
            <ModalMessengerContacts>
              <ModalMessengerContentContacts>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#C6119A",
                    fontFamily: "Century Gothic",
                  }}
                  href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                  target="blank"
                >
                  <ModalContactsItems>
                    <ModalIconsContacts>
                      <img
                        width="40px"
                        src="/images/modal-icons/whatsapp.svg"
                      />
                    </ModalIconsContacts>
                    <ModalContactsName> WhatsApp</ModalContactsName>
                  </ModalContactsItems>
                </a>

                <a
                  style={{
                    textDecoration: "none",
                    color: "#C6119A",
                    fontFamily: "Century Gothic",
                  }}
                  href="https://t.me/kot_vangog"
                  target="blank"
                >
                  <ModalContactsItems>
                    <ModalIconsContacts>
                      <img
                        width="40px"
                        src="/images/modal-icons/telegram.svg"
                      />
                    </ModalIconsContacts>
                    <ModalContactsName> Telegram </ModalContactsName>
                  </ModalContactsItems>
                </a>

                <a
                  style={{
                    textDecoration: "none",
                    color: "#C6119A",
                    fontFamily: "Century Gothic",
                  }}
                  href="https://vk.com/lubov0011"
                  target="blank"
                >
                  <ModalContactsItems>
                    <ModalIconsContacts>
                      <img width="40px" src="/images/modal-icons/vk.svg" />
                    </ModalIconsContacts>
                    <ModalContactsName> Vkontakte</ModalContactsName>
                  </ModalContactsItems>
                </a>
              </ModalMessengerContentContacts>
            </ModalMessengerContacts>
          </Modal>
        </ContactStickyButtonOneContainer>

        <ContactStickyButtonTwoContainer>
          <ContactStickyButtonTwo>
            <Box onClick={() => setModalActive(true)}> Позвонить</Box>
          </ContactStickyButtonTwo>
          <Modal active={modalActive} setActive={setModalActive}>
            <ModalTitleContacts>
              Получите консультацию по телефону:
            </ModalTitleContacts>
            <ModalMessengerContacts>
              <ModalMessengerContentContacts>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#C6119A",
                    fontFamily: "Century Gothic",
                  }}
                  target="blank"
                  href="tel:+79933600710"
                >
                  <ModalContactsItems>
                    <ModalIconsContacts>
                      <img width="40px" src="/images/icon phone.png" />
                    </ModalIconsContacts>
                    <ModalContactsName> +79933600710</ModalContactsName>
                  </ModalContactsItems>
                </a>
              </ModalMessengerContentContacts>
            </ModalMessengerContacts>
          </Modal>
        </ContactStickyButtonTwoContainer>
      </ContactStickyContainer>
    </ContactSticky>
  );
};

export default ContactsSticky;
