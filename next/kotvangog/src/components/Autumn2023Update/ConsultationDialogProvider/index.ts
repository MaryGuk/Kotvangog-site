import { useContext } from 'react';

import ConsultationDialogContext from './context';

export const useConsultationDialog = () => {
  return useContext(ConsultationDialogContext);
};
