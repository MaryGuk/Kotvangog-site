import "./advantages-page.css";

const AdvantagesPage = () => {
  return (
    <div className="advantages-page">
      <div className="advantages-page__title">Наши преимущества</div>
      <div className="advantages-container">
        <div className="advantages-content">
          <img className="advantages-img1" src="/images/brain.png" alt="" />
          <h2 className="advantages-text1">Реализуем заказы любой сложности</h2>
        </div>

        <div className="advantages-content">
          <img className="advantages-img2" src="/images/image.png" alt="" />
          <h2 className="advantages-text2">
            Плохое качество фото для нас не проблема
          </h2>
        </div>

        <div className="advantages-content">
          <img className="advantages-img3" src="/images/phone.png" alt="" />
          <h2 className="advantages-text3">Не используем шаблоны и фильтры</h2>
        </div>

        <div className="advantages-content">
          <img className="advantages-img4" src="/images/chat.png" alt="" />
          <h2 className="advantages-text4">
            Согласовываем до полного утверждения
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesPage;
