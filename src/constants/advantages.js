import BoxingPointer from '../components/Autumn2023Update/MainPage/OilCanvasArea/OilSlide/BoxingPointer';
import ReverseBoxingPointer from '../components/Autumn2023Update/MainPage/OilCanvasArea/OilSlide/ReverseBoxingPointer';

export const oilAdvantages = [
  { advantageText: 'Художник вручную пишет маслом от 2 дней' },
  {
    advantageText:
      'После высыхания покрываем лаком для защиты от пыли и выцветания',
  },
  {
    advantageText: 'Упаковываем в премиальную подарочную коробку и пакет',
    endAdornment: <BoxingPointer />,
    reverseEndAdornment: <ReverseBoxingPointer />,
  },
];

export const canvasAdvantages = [
  {
    advantageText:
      'Художник вручную отрисовывает портрет на графическом планшете (не используем фильтры)',
  },
  { advantageText: 'Отправляем макеты на всех этапах прорисовки' },
  { advantageText: 'При необходимости бесплатно вносим правки' },
];
