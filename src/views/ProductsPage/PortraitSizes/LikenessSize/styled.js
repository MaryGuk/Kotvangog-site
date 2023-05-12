import { Box, styled } from "@mui/material";

export const LikenessSizeWrapper = styled(Box)`
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  height: auto;
  padding: 65px 0;
`;
export const LikenessSizeGeneral = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;

  @media (max-width: 805px) {
    margin: 15px;
  }
`;

export const LikenessSizeDescription = styled(Box)``;

export const LikenessSizeTextOneContainer = styled(Box)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const LikenessSizeTextOne = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
`;
export const LikenessSizeTextOneMoreContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const LikenessSizeTextOneMore = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  color: #555555;
`;

export const LikenessSizeTextTwoContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const LikenessSizeTextTwo = styled(Box)`
  font-size: 18px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
`;
export const LikenessSizeTextTwoMoreContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: -30px;
`;
export const LikenessSizeTextTwoMore = styled(Box)`
  font-size: 16px;
  font-family: "Nunito", Sans-serif;
  font-weight: 600;
  color: #555555;
`;

export const LikenessSizeContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  width: 75%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
`;
