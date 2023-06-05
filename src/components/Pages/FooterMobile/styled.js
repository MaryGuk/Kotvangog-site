import { Box, styled } from "@mui/material";

export const FooterMobileWrapper = styled(Box)`
  background-color: #989898;
`;

export const FooterMobileGeneral = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const FooterMobileTitleWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: 18px;
`;

export const FooterMobileTitle = styled(Box)`
  font-family: "Century Gothic";
  font-size: 17px;
  font-weight: normal;
  color: white;
`;

export const FooterMobileInformation = styled(Box)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  height: 300px;
  padding-top: 37px;
  padding-bottom: 45px;
`;

export const FooterMobileLinkContainer = styled(Box)`
  display: flex;
  padding-left: 31px;
  flex-direction: column;
`;

export const FooterMobileLink = styled(Box)`
  font-family: "Century Gothic";
  font-size: 15px;
  font-weight: normal;
  color: white;
  padding-bottom: 15px;
`;

export const FooterMobileWorkSchedule = styled(Box)`
  padding-top: 39px;
  padding-left: 20px;
`;

export const FooterSchedule = styled(Box)`
  font-family: "Century Gothic";
  font-size: 12px;
  font-weight: normal;
  color: white;
  padding-bottom: 18px;
`;
export const FooterWorkDays = styled(Box)`
  font-family: "Century Gothic";
  font-size: 12px;
  font-weight: normal;
  color: white;
  padding-bottom: 5px;
`;
export const FooterWorkTime = styled(Box)`
  font-family: "Century Gothic";
  font-size: 12px;
  font-weight: normal;
  color: white;
  padding-bottom: 19px;
`;

export const FooterMobileMessenger = styled(Box)`
  display: flex;
  flex-direction: row;
  height: 38px;
  width: 167px;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const FooterMobileContacts = styled(Box)`
  display: flex;
  flex-direction: column;
  font-family: "Century Gothic";
  font-size: 12px;
  font-weight: normal;
  color: white;
  padding-top: 38px;
`;
export const FooterEmail = styled(Box)`
  padding-bottom: 8px;
`;

export const FooterEmailName = styled(Box)`
  padding-bottom: 21px;
`;

export const FooterPhone = styled(Box)`
  padding-bottom: 8px;
`;

export const FooterPhoneNumber = styled(Box)``;
