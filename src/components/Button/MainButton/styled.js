import { Box, styled } from "@mui/material";

export const MainButtonWrapper = styled(Box)`
  margin-bottom: 120px;
`;

export const MainButtonContainer = styled(Box)`
  display: flex;
`;

export const MainButtonItem = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  letter-spacing: 1.5px;
  background-color: #36883d;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 15px;
  max-width: 300px;
  box-shadow: 3px 3px 0 1px #9e9e9e;
`;

export const ModalTitle = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  text-align: center;
`;
export const ModalMessenger = styled(Box)`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const ModalMessengerContent = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ModalIcons = styled(Box)`
  margin-right: 10px;
  transition: 0.8s;

  :hover {
    transform: scale(1.2);
  }

  :last-child {
    content: "";
    margin-right: 0;
  }
`;
