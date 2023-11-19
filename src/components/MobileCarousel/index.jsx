import {useMemo, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@mui/system";
import {StyledIconButtonPrev, StyledIconButtonNext, HoverScalableContent} from "./styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from "react-router-dom";

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

  if (typeof(data) === 'string') {
    imageSrc = data;
  } else {
    imageSrc = data.imageSrc;
    redirectTo = data.redirectTo;
  }


  const itemContent = (
    <Box onClick={onClick} display="flex" justifyContent="center" alignItems="center">
      <img
        style={{width: '100%', height: 'auto'}}
        src={imageSrc}
        alt=''
        onLoad={onImageLoad}
      />
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

    const handleImageLoad = ({ target: img }) => {
        setMaxHeight(oldHeight => Math.max(oldHeight, img.offsetHeight));
    };

    return (
        <HoverScalableContent height={maxHeight * rowCount}>
            <Slider {...settings}>
                {pages.map((images, index) => (
                    <Box key={index}>
                        <Box
                            display="grid"
                            gridTemplateColumns={`repeat(${columnCount}, 1fr)`}
                            gridTemplateRows={`repeat(${rowCount}, ${maxHeight}px)`}
                            columnGap="12px"
                            rowGap="22px"
                            padding="0 10px"
                        >
                            {images.map((imageData, idx) => (
                              <MobileCarouselItem key={idx} data={imageData} onClick={() => onImageClick(index * imagesOnPage + idx)} onImageLoad={handleImageLoad} />
                            ))}
                        </Box>
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
