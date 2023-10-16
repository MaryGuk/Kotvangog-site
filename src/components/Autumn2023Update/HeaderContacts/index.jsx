import {HeaderContactsMessengersWrapper, HeaderContactsWorkTimeWrapper, HeaderContactsWrapper} from "./styled";
import {workTime, messengers} from '../../../constants/mainCoonstants';
import HeaderContact from "./HeaderContact";

const HeaderContacts = () => {
  return <HeaderContactsWrapper>
    <HeaderContactsWorkTimeWrapper>
      {workTime.map((workTimeItem) => (
          <div key={workTimeItem}>{workTimeItem}</div>
      ))}
    </HeaderContactsWorkTimeWrapper>
    <HeaderContactsMessengersWrapper>
      {messengers.map(({imgSrc, link}) => (
          <HeaderContact key={imgSrc} imgSrc={imgSrc} link={link}/>
      ))}
    </HeaderContactsMessengersWrapper>
  </HeaderContactsWrapper>;
};

export default HeaderContacts;
