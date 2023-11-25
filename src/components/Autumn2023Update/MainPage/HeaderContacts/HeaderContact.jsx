import { HeaderContactsMessengerItemWrapper } from './styled';

const HeaderContact = ({ imgSrc, link, width = '16%' }) => {
  return (
    <HeaderContactsMessengerItemWrapper width={width}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={imgSrc} alt="contact" />
      </a>
    </HeaderContactsMessengerItemWrapper>
  );
};

export default HeaderContact;
