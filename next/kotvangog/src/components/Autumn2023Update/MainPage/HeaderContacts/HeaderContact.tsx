import { HeaderContactsMessengerItemWrapper } from './styled';
import Image from 'next/image';
import { SvgIcon } from '@mui/material';

const HeaderContact = ({ image, link, width = '16%' }) => {
  return (
    <HeaderContactsMessengerItemWrapper width={width}>
      <a href={link} target="_blank" rel="noreferrer">
        {image}
      </a>
    </HeaderContactsMessengerItemWrapper>
  );
};

export default HeaderContact;
