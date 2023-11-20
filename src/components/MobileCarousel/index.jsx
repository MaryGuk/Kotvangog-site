import {useMemo, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@mui/system";
import {StyledIconButtonPrev, StyledIconButtonNext, HoverScalableContent, MobileCarouselItemsWrapper} from "./styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { HashLink as Link } from "react-router-hash-link";
import {useTranslation} from "react-i18next";
import {Typography} from "@mui/material";
import {subtitlePxHeight} from "../../theme/overrides/MuiTypography";

export const NextArrow = ({ onClick }) => {
    return (
        <StyledIconButtonNext
            onClick={onClick}
        >
            <ArrowForwardIosIcon />
        </StyledIconButtonNext>
    );
}

export const PrevArrow = ({ onClick }) => {
    return (
        <StyledIconButtonPrev
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </StyledIconButtonPrev>
    );
}

const MobileCarouselItem = ({ onClick, onImageLoad, data }) => {
  let redirectTo, imageSrc;
  const { t } = useTranslation();

  if (typeof(data) === 'string') {
    imageSrc = data;
  } else {
    imageSrc = data.imageSrc;
    redirectTo = data.redirectTo;
  }

  const handleImageLoad = (({ target: img }) => {
    onImageLoad(img.offsetHeight + (data.description?.length ?? 0) * subtitlePxHeight);
  });

  const itemContent = (
    <Box onClick={onClick} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <img
        style={{width: '100%', height: 'auto'}}
        src={imageSrc}
        alt=''
        onLoad={handleImageLoad}
      />
      {data.description?.map((textKey, idx) => (
        <Typography color="black" variant="subtitle1" key={idx}>{t(textKey)}</Typography>
      ))}
    </Box>
  );

  return redirectTo ? (
    <Link to={redirectTo}>
      {itemContent}
    </Link>
  ) : itemContent;
}


const MobileCarouselRow = ({ imageList, columnCount, onImageClick, rowCount }) => {
    const [maxHeight, setMaxHeight] = useState(0);

    const pages = [];

    rowCount = rowCount || 1;
    columnCount = columnCount || 1;

    const imagesOnPage = rowCount * columnCount;

    for (let i = 0; i < imageList.length; i += imagesOnPage) {
        pages.push(imageList.slice(i, i + imagesOnPage));
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const handleImageLoad = (imageHeight) => {
        setMaxHeight(oldHeight => Math.max(oldHeight, imageHeight));
    };

    return (
        <HoverScalableContent height={maxHeight * rowCount}>
            <Slider {...settings}>
                {pages.map((images, index) => (
                    <Box key={index}>
                        <MobileCarouselItemsWrapper
                            gridTemplateColumns={`repeat(${columnCount}, 1fr)`}
                            gridTemplateRows={`repeat(${rowCount}, ${maxHeight}px)`}
                        >
                            {images.map((imageData, idx) => (
                              <MobileCarouselItem key={idx} data={imageData} onClick={() => onImageClick(index * imagesOnPage + idx)} onImageLoad={handleImageLoad} />
                            ))}
                        </MobileCarouselItemsWrapper>
                    </Box>
                ))}
            </Slider>
        </HoverScalableContent>
    );
};


const MobileCarousel = ({ imageList, rowCount, columnCount, onImageClick }) => {
    const imagesOnPage = rowCount * columnCount;

    const carouselRowsImages = useMemo(() => {
        const rowsImages = [];

        for (let i = 0; i < rowCount; i++) {
            rowsImages.push([]);
        }

        return imageList.reduce((prev, src, idx) => {
            prev[Math.floor((idx % imagesOnPage) / columnCount)].push(src);

            return prev;
        }, rowsImages)
    }, []);

    return (<Box>
        {carouselRowsImages.map((rowImages, idx) => (
            <Box mt="22px" key={idx}>
                <MobileCarouselRow
                    columnCount={columnCount}
                    imageList={rowImages}
                    onImageClick={(rowImagesIdx) => onImageClick((imagesOnPage * Math.floor(rowImagesIdx / columnCount)) + (rowImagesIdx % columnCount) + (idx * columnCount))}
                />
            </Box>))}
    </Box>);
}

export default MobileCarousel;
