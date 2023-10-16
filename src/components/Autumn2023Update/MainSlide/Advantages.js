import {
    AdvantagesWrapper,
    AdvantageItemWrapper, AdvantageItemDescriptionWrapper
} from "./styled";
import {advantages} from "../../../constants/mainCoonstants";
import AdvantageMarker from "../../../images/MainPage/MainSlide/advantageMarker.svg";

const Advantages = () => {
    return (
        <AdvantagesWrapper>
            {advantages.map((advantageString,  idx) => (
                <AdvantageItemWrapper key={idx}>
                    <img src={AdvantageMarker} alt="advantage marker" />
                    <AdvantageItemDescriptionWrapper>
                        {advantageString}
                    </AdvantageItemDescriptionWrapper>
                </AdvantageItemWrapper>
            ))}
        </AdvantagesWrapper>
    );
};

export default Advantages;