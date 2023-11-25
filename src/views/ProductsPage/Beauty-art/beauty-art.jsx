import { Dialog } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import './beauty-art.css';
import ImageGallery from './Image-beauty';
import ImageWithLoader from '../../../components/ImageWithLoader';
import BeforeAfterImage from '../../../components/BeforeAfterImage';

const BeautyArt = () => {
  const [openImageDialog, setOpenImageDialog] = useState(false);
  return (
    <div className="beauty-art__page">
      <div className="beauty-art__general">
        <div id="beauty-art" className="beauty-art__container">
          <div>
            <BeforeAfterImage
              height="500px"
              srcAfter="/images/styles/Бьюти-арт/бьюти-арт.jpg"
              srcBefore="/images/styles/Бьюти-арт/до бьюти-арт.jpg"
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
        <ImageGallery setOpenImageDialog={setOpenImageDialog} />

        <Dialog
          open={openImageDialog}
          onClose={() => setOpenImageDialog(false)}
        >
          <Box height="500px" overflow="hidden">
            <ImageWithLoader
              height="100%"
              src="https://previews.dropbox.com/p/thumb/AB1JSOWx1BQJ1SRvSYEP-n09cqallVWAqG5WvWMe83NMp9-rR6QDyf64a8uQGMuvdGpbGqU_0sjpbxJe347lN0-AERKc3K4Hqta8gn5qW5KldRFZJWhgppsNtKP1722ThQfgX4zlnMO0A4niareEBs1vK1cNybTJHWTyoRCWFLUM_pmpOfqWWS7AvPRPfQ5lWWcFLMfoxJJKXQWl-sJhRt89-XuNDgifDya3n6e9F87dJJTjHJQjX65bn7zIW_2NwZRq_mgsv2EbelGHP96Rv7nW5MR5rm9fhPzQxBi7vXyoRoJLb1rbVt8kh8nk2LD-BSWy2RoLEO3ZlSgufINfXHuyjgFS3f1KohYHEveP2GVPWyel22l6RRBEweBl7I18PBo/p.jpeg"
              alt=""
            />
          </Box>
        </Dialog>
      </div>
    </div>
  );
};

export default BeautyArt;
