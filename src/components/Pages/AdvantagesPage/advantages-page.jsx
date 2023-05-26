import "./advantages-page.css";
import AdvantageItem from "./AdvantageItem.jsx";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { useTranslation } from "react-i18next";
import AdvantagesTitleWave from "./AdvantagesTitle/advantages-title";
import { isBrowser, isMobile } from "react-device-detect";

const AdvantagesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="advantages-page">
      <MainPageItemWrapper>
        <div className="advantages-page__general">
          {/* {!isMobile && <AdvantagesTitleWave />} */}
          <AdvantagesTitleWave />

          <div className="advantages-container">
            {[
              {
                imageSrc: "/images/brain.png",
                description: t("advantagesPage.description1"),
                newDescription:
                  "Не нашли что искали, воплотим любую идею красиво. ",
                newDescription2:
                  "От печати на холсте до написания картины маслом.",
              },
              {
                imageSrc: "/images/image.png",
                description: isMobile
                  ? "Экспресс-изготовление за сутки"
                  : t("advantagesPage.description2"),

                newDescription: "Стандартный срок 3-4 рабочих дня.",
                newDescription2:
                  "Экспресс-изготовление за 1 рабочие сутки. Мы не подведем!",
              },
              {
                imageSrc: "/images/phone.png",
                description: t("advantagesPage.description3"),
                newDescription:
                  "Наши дизайнеры отрисовывают портрет полностью в ручную с помощью графического планшета. ",
              },
              {
                imageSrc: "/images/chat.png",
                description: t("advantagesPage.description4"),
                newDescription:
                  "Готовый макет дизайнер отправит на согласование по мессенджеру.",
                newDescription2:
                  " Вы можете вносить дополнительные корректировки.",
              },
            ].map(
              (
                { imageSrc, description, newDescription, newDescription2 },
                idx
              ) => (
                <AdvantageItem
                  key={idx}
                  imageSrc={imageSrc}
                  description={description}
                  newDescription={newDescription}
                  newDescription2={newDescription2}
                />
              )
            )}
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default AdvantagesPage;
