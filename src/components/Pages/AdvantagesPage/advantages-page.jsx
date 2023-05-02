import "./advantages-page.css";
import AdvantageItem from "./AdvantageItem.jsx";
import { MainPageItemWrapper } from "../../../views/MainPage/styled";
import { useTranslation } from "react-i18next";
import AdvantagesTitleWave from "./AdvantagesTitle/advantages-title";

const AdvantagesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="advantages-page">
      <MainPageItemWrapper>
        <div className="advantages-page__general">
          <AdvantagesTitleWave />

          <div className="advantages-container">
            {[
              {
                imageSrc: "/images/brain.png",
                description: t("advantagesPage.description1"),
              },
              {
                imageSrc: "/images/image.png",
                description: t("advantagesPage.description2"),
              },
              {
                imageSrc: "/images/phone.png",
                description: t("advantagesPage.description3"),
              },
              {
                imageSrc: "/images/chat.png",
                description: t("advantagesPage.description4"),
              },
            ].map(({ imageSrc, description }, idx) => (
              <AdvantageItem
                key={idx}
                imageSrc={imageSrc}
                description={description}
              />
            ))}
          </div>
        </div>
      </MainPageItemWrapper>
    </div>
  );
};

export default AdvantagesPage;
