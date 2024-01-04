import SvgIcon from '@mui/material/SvgIcon';

export default function SvgIconAdvantageMarker(props) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 43 43"
      >
        <path
          fillRule="evenodd"
          stroke={props.color}
          strokeWidth="8px"
          fill="none"
          d="M19.246,7.996 C25.457,7.996 30.492,13.031 30.492,19.241 C30.492,25.452 25.457,30.486 19.246,30.486 C13.034,30.486 7.999,25.452 7.999,19.241 C7.999,13.031 13.034,7.996 19.246,7.996 Z"
        />
      </svg>
    </SvgIcon>
  );
}
