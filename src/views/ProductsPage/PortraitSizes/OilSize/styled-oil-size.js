import { Box, styled } from "@mui/material";

export const OilSizeItemWrapper = styled(Box)``;

export const OilSizeItemContainer = styled(Box)`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    :last-child {
      align-items: center;
    }
  }
`;

export const OilSizesItemSize = styled(Box)`
  margin-top: 7px;
  font-size: 18px;
  color: #606060;
  font-family: "Nunito", Sans-serif;
  font-weight: 700;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const OilSizesPrintText = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const OilSizesItemText = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
