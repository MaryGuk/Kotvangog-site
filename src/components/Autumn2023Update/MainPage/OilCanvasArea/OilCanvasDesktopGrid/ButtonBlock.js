import { OilCanvasGridButtonBlockWrapper } from '../styled';
import { Button } from '@mui/material';
import { useConsultationDialog } from '../../../ConsultationDialogProvider';

const ButtonBlock = ({ ...props }) => {
  const { onOpen } = useConsultationDialog();

  return (
    <OilCanvasGridButtonBlockWrapper {...props}>
      <Button variant="contained" onClick={onOpen}>
        Рассчитать стоимость
      </Button>
    </OilCanvasGridButtonBlockWrapper>
  );
};

export default ButtonBlock;
