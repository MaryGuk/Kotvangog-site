import { mobilePhone } from '../constants/mainConstants';
import { useRef } from 'react';
import { Typography } from '@mui/material';

const MobileLink = () => {
  const ref = useRef(null);

  const handleClick = () => {
    console.log(ref.current);
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <>
      <a ref={ref} href={`tel:${mobilePhone.number}`} alt="" />
      <Typography variant="subtitle2" onClick={handleClick}>
        {mobilePhone.text}
      </Typography>
    </>
  );
};

export default MobileLink;
