import "./advantages-page.css";
import AdvantageItem from "./AdvantageItem.jsx";
import AdvantagesTitle from "./AdvantagesTitle";

const AdvantagesPage = () => {
  return (
    <div className="advantages-page">
      <div className="advantages-page__general">
        <AdvantagesTitle />

        <div className="advantages-container">
          {[
            {
              imageSrc: "/images/brain.png",
              description: "Реализуем заказы любой сложности",
            },
            {
              imageSrc: "/images/image.png",
              description: "Плохое качество фото для нас не проблема",
            },
            {
              imageSrc: "/images/phone.png",
              description: "Не используем шаблоны и фильтры",
            },
            {
              imageSrc: "/images/chat.png",
              description: "Согласовываем до полного утверждения",
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
    </div>
  );
};

export default AdvantagesPage;
