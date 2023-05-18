import { Box, styled } from "@mui/material";

export const ModernImagesWrapper = styled(Box)`
  background-color: #bdbdbd;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ModernImagesGeneral = styled(Box)`
  width: 100%;
`;
export const ModernImagesContent = styled(Box)`
  margin-top: 30px;
`;

export const ModernImagesDescription = styled(Box)`
  font-size: 26px;
  font-family: "Palatino Linotype";
  font-weight: 500;
  text-align: center;
  color: #555555;
`;

export const HistoryImagesCollage = styled(Box)`
  display: flex;
  justify-content: center;
`;
export const HistoryImagesCollageItems = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    display: "flex";
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
`;
export const HistoryImagesCollageImage = styled(Box)`
  margin-bottom: 40px;
`;

export const HistoryImagesCollageText = styled(Box)`
  margin-top: -40px;
  margin-left: 5px;
`;
export const HistoryImagesCollageText1 = styled(Box)`
  font-size: 19px;
  font-family: "Palatino Linotype";
  font-weight: 700;
  color: #555555;
  text-align: center;
`;
export const HistoryImagesCollageText2 = styled(Box)`
  font-size: 18px;
  font-family: "Palatino Linotype";
  font-weight: 400;
  color: #555555;
  max-width: 310px;
  text-align: center;
`;
