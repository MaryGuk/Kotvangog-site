import { InnerWrapper, OuterWrapper } from './styled';
import { useDevice } from '@/providers/DeviceProvider';

const PageContentWrapper = ({ children, ...props }) => {
  const isMobile = useDevice();

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
