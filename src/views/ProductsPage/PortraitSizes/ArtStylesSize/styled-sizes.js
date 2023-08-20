import { Box, styled } from "@mui/material";

export const ArtSizeItemWrapper = styled(Box)`
  height: 100%
`;

export const ArtSizeItemContainer = styled(Box)`
  display: flex;
  justify-content: center;
  height: 100%;
  max-height: 210px;
`;

export const ArtSizesItemSize = styled(Box)`
  font-size: 18px;
  color: #606060;
  font-family: "Nunito", Sans-serif;
  font-weight: 700;
  text-align: center;

  @media only screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const ArtSizesPrintText = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  text-align: center;
  text-wrap: nowrap;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const ArtSizesOilText = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  text-align: center;
  text-wrap: none;
  text-wrap: nowrap;

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
