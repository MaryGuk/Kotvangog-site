import { Dialog } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./beauty-art.css";

const BeautyArt = () => {
  const [openImageDialog, setOpenImageDialog] = useState(false);
  return (
    <div className="beauty-art__page">
      <div id="beauty-art" className="beauty-art__container">
        <div>
          <img
            className="beauty-art__photo"
            src="/images/styles/Бьюти-арт/бьюти-арт.jpg"
            alt=""
          />
        </div>

        <div className="beauty-art__information">
          <div className="beauty-art__title"> Бьюти-арт портрет </div>
          <div className="beauty-art__price"> От 1590 руб. </div>
          <div className="beauty-art__description">
            Гладкость и блеск — главный принцип стиля. Он представляет собой
            нежный, роскошный образ. Особенностью стиля является детальная
            прорисовка портрета. Самый популярный вид исполнения - печать на
            холсте, она хорошо сочетается с текстурным гелем.
          </div>
          <div>
            <a href="#">
              <button className="beauty-art__button" type="submit">
                Получить консультацию
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="beauty-art__gallery">
        <div onClick={() => setOpenImageDialog(true)}>
          <img
            className="beauty-art__image"
            src="/images/styles/Бьюти-арт/1 ba.jpg"
            alt=""
          />
        </div>

        <img
          className="beauty-art__image"
          src="/images/styles/Бьюти-арт/2 ba.jpg"
          alt=""
        />
        <img
          className="beauty-art__image"
          src="/images/styles/Бьюти-арт/3 ba.jpg"
          alt=""
        />
        <img
          className="beauty-art__image"
          src="/images/styles/Бьюти-арт/4 ba.jpg"
          alt=""
        />
        <img
          className="beauty-art__image"
          src="/images/styles/Бьюти-арт/5 ba.jpg"
          alt=""
        />
        <img
          className="beauty-art__image"
          src="/images/styles/Бьюти-арт/6 ba.jpg"
          alt=""
        />
      </div>
      <Dialog open={openImageDialog} onClose={() => setOpenImageDialog(false)}>
        <Box height="500px" overflow="hidden">
          <img
            height="100%"
            src="https://previews.dropbox.com/p/thumb/ABypDF8RvuCfJbLNYseRfOOp-lHEjRFRIHSaJBL3ZkTjo11ffTf6so4-t1C4vVeUVvc3jz-cdIxTW_nJidWAfgNz_1BCGN1UEhReMUzDy2j0Cvct7kuKpICILhA40ezNgmZpaoZEJKY0DfWbcX4DYEBEOU8dARKIPCgN1uZqv6LrZU0ra-_dgcNJeL732EYilrJCG5LCgXR3X4TF3_0J9S2pciClbkJuqCE8xTQ00XvsIhU612VDRatPrTTacF6Wj9ogB9XYvLQI4xJyxHvNeLulcJoFGeaLlfEmGfKAqplYUBghu4RfbXNCV6E3Ktnr--ymvLYYgkEjJklLEMftmafaIwjq4afXTWZB2bLa9Rwfg9Ac26giojAwLz9vdODXiBA/p.jpeg"
            alt=""
          />
        </Box>
      </Dialog>
    </div>
  );
};

export default BeautyArt;
