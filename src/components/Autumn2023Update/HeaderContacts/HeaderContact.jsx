import {HeaderContactsMessengerItemWrapper} from "./styled";

const HeaderContact = ({ imgSrc, link }) => {
    return (
        <HeaderContactsMessengerItemWrapper>
            <a href={link} target="_blank" rel="noreferrer">
                <img
                    src={imgSrc}
                    alt="contact"
                />
            </a>
        </HeaderContactsMessengerItemWrapper>
    );
};

export default HeaderContact;