import { Box, styled } from "@mui/material";

export const ArtStylesSizeWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
`;
export const ArtStylesSizeGeneral = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (max-width: 805px) {
    margin: 15px;
  }
`;
export const ArtStylesSizeTitle = styled(Box)`
  font-size: 26px;
  font-family: "Palatino Linotype";
  font-weight: 500;
  text-align: center;
  color: black;
`;

export const ArtStylesSizeDescription = styled(Box)``;

export const ArtSizeTextOneContainer = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const ArtSizeTextOne = styled(Box)`
  font-size: 22px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
`;

export const ArtSizeTextTwoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ArtSizeTextTwo = styled(Box)`
  font-size: 22px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
`;

export const ArtSizeContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 75%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
`;
