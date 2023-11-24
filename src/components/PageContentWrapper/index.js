import { isMobile } from 'react-device-detect';
import { InnerWrapper, OuterWrapper } from './styled';

const PageContentWrapper = ({ children }) => {
  if (isMobile) {
    return children;
  }

  return (
    <OuterWrapper>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
};

export default PageContentWrapper;
