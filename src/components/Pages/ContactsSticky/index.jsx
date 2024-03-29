import { Box } from '@mui/system';
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
} from './styled';
import { useState } from 'react';
import Modal from '../../Modal/modal';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const PhoneDialog = ({ open, onClose, phoneNumber }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        style={{
          color: 'black',
          fontFamily: 'Century Gothic',
          fontSize: '20px',
          textAlign: 'center',
        }}
      >
        Получите консультацию по телефону:
      </DialogTitle>
      <DialogContent>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <Box style={{ marginRight: '15px' }}>
            <img width="40px" src="/images/icon phone.png" alt="" />
          </Box>
          <Box
            style={{
              textDecoration: 'none',
              fontFamily: 'Century Gothic',
              fontSize: '18px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#C6119A',
            }}
          >
            {
              <a
                style={{
                  textDecoration: 'none',
                  color: '#C6119A',
                  fontFamily: 'Century Gothic',
                }}
                href="tel:+79933600710"
              >
                {' '}
                {phoneNumber}
              </a>
            }
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          <a
            style={{
              textDecoration: 'none',
              color: 'black',
              fontFamily: 'Century Gothic',
            }}
          >
            Отмена
          </a>
        </Button>
        <Button onClick={onClose} color="primary">
          <a
            style={{
              textDecoration: 'none',
              color: '#C6119A',
              fontFamily: 'Century Gothic',
            }}
            href="tel:+79933600710"
          >
            Позвонить
          </a>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ContactsSticky = () => {
  const [modalActive, setModalActive] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const phoneNumber = '+7 993 360 07 10';

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

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
                    textDecoration: 'none',
                    color: '#C6119A',
                    fontFamily: 'Century Gothic',
                  }}
                  href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
                  target="blank"
                >
                  <ModalContactsItems>
                    <ModalIconsContacts>
                      <img
                        width="40px"
                        src="/images/modal-icons/whatsapp.svg"
                        alt=""
                      />
                    </ModalIconsContacts>
                    <ModalContactsName> WhatsApp</ModalContactsName>
                  </ModalContactsItems>
                </a>

                <a
                  style={{
                    textDecoration: 'none',
                    color: '#C6119A',
                    fontFamily: 'Century Gothic',
                  }}
                  href="https://t.me/kot_vangog"
                  target="blank"
                >
                  <ModalContactsItems>
                    <ModalIconsContacts>
                      <img
                        width="40px"
                        src="/images/modal-icons/telegram.svg"
                        alt=""
                      />
                    </ModalIconsContacts>
                    <ModalContactsName> Telegram </ModalContactsName>
                  </ModalContactsItems>
                </a>

                <a
                  style={{
                    textDecoration: 'none',
                    color: '#C6119A',
                    fontFamily: 'Century Gothic',
                  }}
                  href="https://vk.com/lubov0011"
                  target="blank"
                >
                  <ModalContactsItems>
                    <ModalIconsContacts>
                      <img width="40px" src="/images/modal-icons/vk.svg" alt="" />
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
            <Box onClick={handleDialogOpen}>Позвонить</Box>
          </ContactStickyButtonTwo>
          <PhoneDialog
            open={dialogOpen}
            onClose={handleDialogClose}
            phoneNumber={phoneNumber}
          />
        </ContactStickyButtonTwoContainer>
      </ContactStickyContainer>
    </ContactSticky>
  );
};

export default ContactsSticky;
