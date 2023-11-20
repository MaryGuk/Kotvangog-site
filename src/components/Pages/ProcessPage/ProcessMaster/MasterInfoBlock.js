import {AboutMeBlock, MasterInfoBlockWrapper, MasterInfoWrapper} from "../styled";
import MasterName from "../MasterName/master-name";
import {Typography} from "@mui/material";
import {aboutMeText} from "../../../../constants/mainConstants";
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
    </MasterInfoBlockWrapper>
  );
};

export default MasterInfoBlock;