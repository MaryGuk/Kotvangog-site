import {
  HeaderContactsMessengersWrapper,
  HeaderContactsWorkTimeWrapper,
  HeaderContactsWrapper,
} from './styled';
import { workTime, messengers } from '../../../../constants/mainConstants';
import HeaderContact from './HeaderContact';
import { Typography } from '@mui/material';

const HeaderContacts = () => {
  return (
    <HeaderContactsWrapper>
      <HeaderContactsWorkTimeWrapper>
        {workTime.map((workTimeItem) => (
          <Typography variant="body2" key={workTimeItem} textAlign="start">
            {workTimeItem}
          </Typography>
        ))}
      </HeaderContactsWorkTimeWrapper>
      <HeaderContactsMessengersWrapper>
        {messengers.map(({ imgSrc, link }) => (
          <HeaderContact key={imgSrc} imgSrc={imgSrc} link={link} />
        ))}
      </HeaderContactsMessengersWrapper>
    </HeaderContactsWrapper>
  );
};

export default HeaderContacts;
