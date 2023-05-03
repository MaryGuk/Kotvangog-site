import { Box, styled } from "@mui/material";

export const OilSizeWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
`;
export const OilSizeGeneral = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (max-width: 805px) {
    margin: 15px;
  }
`;

export const OilSizeDescription = styled(Box)``;

export const OilSizeTextOneContainer = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const OilSizeTextOne = styled(Box)`
  font-size: 22px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
`;

export const OilSizeTextTwoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const OilSizeTextTwo = styled(Box)`
  font-size: 22px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
`;

export const OilSizeContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 75%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
`;
