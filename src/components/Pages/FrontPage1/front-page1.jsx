import "./front-page1.css";
import { experimentalStyled as styled } from "@mui/material";
import { Box } from "@mui/system";
import {FrontPage1ImageWrapper, FrontPage1InfoWrapper, MainPageItemWrapper} from "../../../views/MainPage/styled";

const TitleWrapper = styled(Box)`
  background-repeat: no-repeat;
  background-image: url("https://previews.dropbox.com/p/thumb/AB3wzaOG4VS4JBitZNynv5fOgU5GvIaQXc4wtlRENd1dsIhm7hj1V7MjfLmYsrXHjYLmpM7nlOyXw8b9fT3piySwpfUXgaJn8lPw6vmN9RzbQPVY5RH1yBW5wBKHJu7tnL1agxdBG_Kh1ziBk4nbI1mPBgEsVi-2R0I31_X8kUoE9v5xdSJwaa41HfCwsunPi6tv8DM-uowW8TtwRK-ZP6Vcv2BKvTFsX8pRKjfHRhZXDg3sG51ppg2KTY_kDSYlbQlOtF2BhL6TQBh8BXzjieSIQyTgwkVMJPWbvSIyYGvsF7IMmMLSppKK-uCoTSop6tRIjbjKCWGfV5Ks-Xa4DXa9h28bFumlm73r08c8SGAvAtsczG1yLFivQVNO1waclJM/p.png");
  background-size: cover;
  padding: 0 10px;
  font-size: 22px;
  font-family: "Palatino Linotype";
  font-weight: 700;
  position: relative;
  top: 30px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;

  @media (max-width: 1000px) {
    width: min-content;
    flex-direction: column;
    background-image: url("https://previews.dropbox.com/p/thumb/AB0cdQ1OZAzoFV8NrYP-tA-x_SaMhdfXcNQsTmUBfQ4kCjdwrwVOFyJDp0c3_nxkuvfU6-OZ5yOe75ZbqcLnwNIvghLQsX_KejMH7Itf_pbMx1j64gCw3Y8D6lE5hdXpRAus8bE9KBC8erIZRzdF9eTXhpEa5MI1vjdY6sEWBdlP_VO494paqOr_DYGW_MGIqXcaVd86so0_Sd-TWqiZ4wuz_-aKdSxja6d5bNhpNYnlj9hfdwb2hfxv2kFBWUM2Oq1Jjs6ulSgzIcAexqnwRAzi6WIBjBPTTX32Kp-ukGRwKdHLRHeYN3Nhbk0GuborB5eNWvF1p08CCoROZcBiASoDRCZfznAmWaab1QKHePvTWVwl7blECasbVSiiIP3CU9M/p.png");
  }
`;

const FrontPage1 = () => {
  return (
    <MainPageItemWrapper>
      <div className="front-page1">
        <div className="front-page1__general">
          <FrontPage1InfoWrapper className="front-page1__information">
            <div>
              <TitleWrapper>
                <div className="front-page1__title-part">
                  Арт портрет с печатью
                </div>

                <div className="front-page1__title-part">
                  на холсте за три дня
                </div>
              </TitleWrapper>
            </div>

            <div className="main-subtitle">
              <div className="front-page1__subtitle">
                Вернем деньги, если не успеем в оговоренные сроки или не
                понравится результат
              </div>
            </div>

            <div className="main-text">
              <div className="front-page1__text">
                Получите консультацию профессионального художника прямо сейчас
              </div>
            </div>

            <div className="main-message">
              <div className="front-page1__message">
                Нажмите кнопку! Свяжемся с Вами в течение 5 минут
              </div>
            </div>
            <div className="main-button">
              <a href="#">
                <button className="front-page1__button" type="submit">
                  Получить консультацию
                </button>
              </a>
            </div>
          </FrontPage1InfoWrapper>

          <FrontPage1ImageWrapper>
            <img
              className="main-image1"
              src="/images/Главное фото.jpg"
              alt=""
            />
          </FrontPage1ImageWrapper>
        </div>
      </div>
    </MainPageItemWrapper>
  );
};

export default FrontPage1;
