import {PhoneAndTimeWrapper, PhoneWrapper, TimeItemWrapper, TimeWrapper} from "./styled";
import {workTime} from "../../constants/mainConstants";
import {Typography} from "@mui/material";
import MobileLink from "../MobileLink";

const PhoneAndTime = () => {
  return (
    <PhoneAndTimeWrapper>
      <PhoneWrapper>
        <Typography variant="subtitle2">
          <MobileLink />
        </Typography>
      </PhoneWrapper>

      <TimeWrapper>
        {workTime.map((workTimeItem, idx) => (
          <TimeItemWrapper key={idx}>
            <Typography variant="body2">
              {workTimeItem}
            </Typography>
          </TimeItemWrapper>
        ))}
      </TimeWrapper>
    </PhoneAndTimeWrapper>
  );
}

export default PhoneAndTime;
