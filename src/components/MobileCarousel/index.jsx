import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@mui/system";
import { StyledIconButtonPrev, StyledIconButtonNext } from "./styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NextArrow = ({ onClick }) => {
    return (
        <StyledIconButtonNext
            onClick={onClick}
        >
            <ArrowForwardIosIcon />
        </StyledIconButtonNext>
    );
}

const PrevArrow = ({ onClick }) => {
    return (
        <StyledIconButtonPrev
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </StyledIconButtonPrev>
    );
}


const MobileCarousel = ({ imageList, rowCount, columnCount, onImageClick }) => {
    const [maxHeight, setMaxHeight] = useState(0);

    const pages = [];

    const imagesOnPage = ((rowCount || 1) * (columnCount || 1));

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
        <Box height={maxHeight * rowCount}>
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
                            {images.map((src, idx) => (
                                <Box key={idx} onClick={() => onImageClick(index * imagesOnPage + idx)} display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        style={{width: '100%', height: 'auto'}}
                                        src={src}
                                        alt=''
                                        onLoad={handleImageLoad}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default MobileCarousel;
