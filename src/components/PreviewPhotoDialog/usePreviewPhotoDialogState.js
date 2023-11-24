import { useState } from 'react';

const usePreviewPhotoDialogState = () => {
  const [fullImageSrcData, setFullImageSrcData] = useState(null);

  const checkIsFirstPhoto = () => fullImageSrcData && !fullImageSrcData.idx;
  const checkIsLastPhoto = () =>
    fullImageSrcData && fullImageSrcData.idx === fullImageSrcData.gallery - 1;

  const isFirstPhoto = checkIsFirstPhoto();
  const isLastPhoto = checkIsLastPhoto();

  const handlePrevPhoto = () => {
    if (!checkIsFirstPhoto()) {
      setFullImageSrcData((prev) => ({ ...prev, idx: prev.idx - 1 }));
    }
  };

  const handleNextPhoto = () => {
    if (!checkIsLastPhoto()) {
      setFullImageSrcData((prev) => ({ ...prev, idx: prev.idx + 1 }));
    }
  };

  return {
    fullImageSrcData,
    setFullImageSrcData,
    isFirstPhoto,
    isLastPhoto,
    handlePrevPhoto,
    handleNextPhoto,
  };
};

export default usePreviewPhotoDialogState;
