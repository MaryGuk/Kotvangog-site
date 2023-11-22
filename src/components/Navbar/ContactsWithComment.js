import {ContactCommentWrapper, ContactsWithCommentWrapper} from "./styled";
import {useMemo} from "react";
import {messengers, messengersComment} from "../../constants/mainConstants";
import {Typography} from "@mui/material";
import HeaderContact from "../Autumn2023Update/MainPage/HeaderContacts/HeaderContact";

const ContactsWithComment = ({ commentPosition }) => {
  const contactData = useMemo(() => {
    const data = [...messengers];
    data.splice(commentPosition, 0, { comment: messengersComment });

    return data;
  }, [commentPosition])

  return (
    <ContactsWithCommentWrapper>
      {contactData.map(({ imgSrc, link, comment }, idx) => comment ? (
        <ContactCommentWrapper key={idx}>
          <Typography variant="body2">{comment}</Typography>
        </ContactCommentWrapper>
      ) : (
          <HeaderContact key={idx} imgSrc={imgSrc} link={link} width="25px"/>
      ) )}
    </ContactsWithCommentWrapper>
  );
}

export default ContactsWithComment;