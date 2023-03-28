import { useTranslation } from "react-i18next";
import "./portrait-page-item.css";
import { ProductPageItemInfoBlock } from "./styled";
import Modal from "../../../components/Modal/modal";
import { useState } from "react";

const PortraitPageItem = ({
  portraitTitle,
  portraitPrice,
  portraitDescription,
  reverse,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const { t } = useTranslation();

  return (
    <ProductPageItemInfoBlock reverse={reverse}>
      <div className="beauty-art__information">
        <div className="beauty-art__title">{portraitTitle}</div>
        <div className="beauty-art__price">{` ${portraitPrice} `}</div>
        <div className="beauty-art__description">{portraitDescription}</div>
      </div>
      <div>
        <button
          className="beauty-art__button"
          onClick={() => setModalActive(true)}
        >
          {t("productsPage.button")}
        </button>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="modal__title">
          Выберите мессенджер, в котором вам будет удобно вести диалог
        </div>
        <div className="modal__messenger">
          <div className="modal-messenger__content">
            <a
              href="https://api.whatsapp.com/send/?phone=79933600710&text&type=phone_number&app_absent=0"
              target="blank"
            >
              <img
                className="modal-icons"
                src="/images/modal-icons/whatsapp.svg"
              />
            </a>
            <a href="https://t.me/kot_vangog" target="blank">
              <img
                className="modal-icons"
                src="/images/modal-icons/telegram.svg"
              />
            </a>
            <a href="https://vk.com/lubov0011" target="blank">
              <img className="modal-icons" src="/images/modal-icons/vk.svg" />
            </a>
          </div>
        </div>
      </Modal>
    </ProductPageItemInfoBlock>
  );
};

export default PortraitPageItem;
