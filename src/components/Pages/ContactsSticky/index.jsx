import { Box } from "@mui/system";
import {
  ContactSticky,
  ContactStickyContainer,
  ContactStickyButtonOneContainer,
  ContactStickyButtonOne,
  ContactStickyButtonTwoContainer,
  ContactStickyButtonTwo,
} from "./styled";
import { Button } from "@mui/material";

const ContactsSticky = () => {
  return (
    <ContactSticky>
      <ContactStickyContainer>
        <ContactStickyButtonOneContainer>
          <ContactStickyButtonOne>
            <Box> Написать</Box>
          </ContactStickyButtonOne>
        </ContactStickyButtonOneContainer>

        <ContactStickyButtonTwoContainer>
          <ContactStickyButtonTwo>
            <Box> Позвонить</Box>
          </ContactStickyButtonTwo>
        </ContactStickyButtonTwoContainer>
      </ContactStickyContainer>
    </ContactSticky>
  );
};

export default ContactsSticky;

// return (
//    <nav className="footer-sticky">
//      <ul className="footer-sticky__nav">
//        <div className="footer-sticky__container">
//          <div className="footer-sticky__box">
//            <div className="footer-sticky__item1">
//              <a href="#" className="footer-sticky__link">
//                Написать
//              </a>
//            </div>
//          </div>

//          <div className="footer-sticky__item2">
//            <a href="#" className="footer-sticky__link">
//              Позвонить
//            </a>
//          </div>
//        </div>
//      </ul>
//    </nav>
//  );
