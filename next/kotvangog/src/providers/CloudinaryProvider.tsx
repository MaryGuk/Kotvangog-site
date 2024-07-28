import { createContext, useContext } from 'react';

const CloudinaryContext = createContext({});

export const useCloudinary = () => useContext(CloudinaryContext);

const CloudinaryProvider = ({ cld, children }) => {
  return (
    <CloudinaryContext.Provider value={{ cld }}>
      {children}
    </CloudinaryContext.Provider>
  );
};

export default CloudinaryProvider;
