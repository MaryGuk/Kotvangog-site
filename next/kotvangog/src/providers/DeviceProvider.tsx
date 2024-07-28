import { createContext, PropsWithChildren, useContext } from 'react';

const DeviceContext = createContext<boolean>(false);

interface DeviceProviderProps extends PropsWithChildren {
  isMobile: boolean;
}

export const DeviceProvider = ({ children, isMobile }: DeviceProviderProps) => {
  return (
    <DeviceContext.Provider value={isMobile}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => {
  return useContext(DeviceContext);
};
