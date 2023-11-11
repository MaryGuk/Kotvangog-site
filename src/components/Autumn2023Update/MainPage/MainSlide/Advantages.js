import {
    AdvantagesWrapper,
    AdvantageItemWrapper, AdvantageItemDescriptionWrapper
} from "./styled";
import {advantages} from "../../../../constants/mainConstants";
import AdvantageMarker from "../../../../images/MainPage/MainSlide/advantageMarker.svg";
import {Typography} from "@mui/material";

const Advantages = () => {
    return (
        <AdvantagesWrapper>
            {advantages.map((advantageString,  idx) => (
                <AdvantageItemWrapper key={idx}>
                    <img src={AdvantageMarker} alt="advantage marker" />
                    <AdvantageItemDescriptionWrapper>
                      <Typography variant="body2" textAlign="start">
                        {advantageString}
                      </Typography>
                    </AdvantageItemDescriptionWrapper>
                </AdvantageItemWrapper>
            ))}
        </AdvantagesWrapper>
    );
};

export default Advantages;