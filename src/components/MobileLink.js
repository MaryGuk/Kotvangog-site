import {mobilePhone} from "../constants/mainConstants";

const MobileLink = () => {
  return (
    <a
      style={{
        textDecoration: "none",
      }}
      href={`tel:${mobilePhone}`}
    >
      {mobilePhone}
    </a>
  );
}

export default MobileLink;