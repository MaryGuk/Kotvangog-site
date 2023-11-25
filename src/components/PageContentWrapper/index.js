import { isMobile } from 'react-device-detect';
import { InnerWrapper, OuterWrapper } from './styled';

const PageContentWrapper = ({ children, ...props }) => {
  if (isMobile) {
    return children;
  }

  return (
    <OuterWrapper>
      <InnerWrapper {...props}>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default PageContentWrapper;
