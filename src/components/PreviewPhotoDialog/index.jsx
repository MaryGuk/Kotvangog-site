import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ImageWithLoader from "../ImageWithLoader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Dialog} from "@mui/material";
import {GalleryPhotoBox, StyledIconButton, StyledIconButtonWrapper} from "./styled";

const PreviewPhotoDialog = ({ open, onClose, showPrevArrow, showNextArrow, handlePrevPhoto, handleNextPhoto, src }) => {
    return (<Dialog open={open} onClose={onClose}>
        {!showPrevArrow && (
            <StyledIconButtonWrapper left="10px">
                <StyledIconButton onClick={handlePrevPhoto}>
                    <ArrowBackIosIcon
                        style={{
                            transform: "translateX(20%)",
                        }}
                    />
                </StyledIconButton>
            </StyledIconButtonWrapper>
        )}

        <GalleryPhotoBox>
            <ImageWithLoader
                height="100%"
                src={src}
                alt=""
                key={src}
            />
        </GalleryPhotoBox>

        {!showNextArrow && (
            <StyledIconButtonWrapper right="10px">
                <StyledIconButton onClick={handleNextPhoto}>
                    <ArrowForwardIosIcon />
                </StyledIconButton>
            </StyledIconButtonWrapper>
        )}
    </Dialog>);
}

export default PreviewPhotoDialog;