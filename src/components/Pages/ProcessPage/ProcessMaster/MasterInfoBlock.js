import {
  AboutMeBlock,
  MasterInfoBlockWrapper,
  MasterInfoWrapper,
  WriteMeBlock,
  WriteMeLinks,
  WriteMeText
} from "../styled";
import MasterName from "../MasterName/master-name";
import {Typography, Box} from "@mui/material";
import {aboutMeText, messengers} from "../../../../constants/mainConstants";
import {Fragment} from "react";

const MasterInfoBlock = () => {
  return (
    <MasterInfoBlockWrapper>
      <div className="master-name">
        <MasterName />
      </div>

      <MasterInfoWrapper>
        <img
          className="process-ava"
          src="https://www.dropbox.com/scl/fi/27c826d7m8vuw7zygbth2/900_.png?rlkey=2yutlcjoozkt3u7kfl7vmf9nv&dl=0&raw=1"
          loading="lazy"
          decoding="async"
          alt="Любовь Ненадовец"
        />
      </MasterInfoWrapper>

      <AboutMeBlock>
        {aboutMeText.map((textBlock, idx) => (
          <Typography mb variant="body2" textAlign="left" key={idx}>
            {textBlock.map(({ bold, text }, internalIdx) => (
              <Fragment key={internalIdx}>{bold ? (<strong>{text}</strong>) : text}</Fragment>
            ))}
          </Typography>
        ))}
      </AboutMeBlock>

      <WriteMeBlock>
        <WriteMeText>
          <Typography variant="body2" textAlign="left" noWrap>Напишите мне:</Typography>
        </WriteMeText>

        <WriteMeLinks linksCount={messengers.length}>
          {messengers.map(({imgSrc, link}, idx) => (
            <Box key={idx}>
              <a href={link} target="_blank" rel="noreferrer">
                <img
                  src={imgSrc}
                  alt="contact"
                />
              </a>
            </Box>
          ))}
        </WriteMeLinks>
      </WriteMeBlock>
    </MasterInfoBlockWrapper>
  );
};

export default MasterInfoBlock;