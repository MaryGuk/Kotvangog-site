import { createContext } from 'react';

const defaultValue = {
  open: false,
  onClose: () => true,
  onOpen: () => true,
};

const ConsultationDialogContext = createContext(defaultValue);

ConsultationDialogContext.displayName = 'ConsultationDialogContext';

export default ConsultationDialogContext;
