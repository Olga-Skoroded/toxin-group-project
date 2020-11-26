import { useState, useRef } from 'react';
import Editor from 'react-avatar-editor';
import { useTranslation } from 'react-i18next';

import { Button, Slider } from 'shared/view/elements';

import * as S from './AvatarEditor.styes';

type Props = {
  image: string;
  onSave: (canvasScaled: HTMLCanvasElement) => void;
  onCancel: () => void;
};

const AvatarEditor: React.FC<Props> = ({ image, onSave, onCancel }: Props) => {
  const [zoomSize, setZoomSize] = useState(1);
  const canvas = useRef(null);

  const { t } = useTranslation(['AvatarLoader', 'Shared']);

  const handleSliderChange = (value: number) => {
    setZoomSize(value);
  };

  const handleCancelButtonClick = () => {
    onCancel();
  };

  const handleSaveButtonClick = () => {
    let canvasScaled = null;
    if (canvas) {
      canvasScaled = canvas.current.getImageScaledToCanvas();
    }
    onSave(canvasScaled);
  };

  return (
    <S.AvatarEditor>
      <S.CancelButton onClick={handleCancelButtonClick} />
      <S.CropperTitle>{t('Select display area')}</S.CropperTitle>
      <S.Description>
        {t('The selected thumbnail will be used in the comments you leave.')}
      </S.Description>
      <Editor
        ref={canvas}
        image={image}
        width={300}
        height={300}
        border={5}
        borderRadius={150}
        color={[255, 255, 255, 0.6]}
        scale={zoomSize}
        rotate={0}
      />
      <S.Controls>
        <S.SliderWrapper>
          <Slider
            name="zoom-size"
            min={1}
            max={10}
            step={0.1}
            value={zoomSize}
            onChange={handleSliderChange}
          />
        </S.SliderWrapper>
        <Button isFilled isFlat onClick={handleSaveButtonClick}>
          {t('Shared:Save')}
        </Button>
      </S.Controls>
    </S.AvatarEditor>
  );
};

export { AvatarEditor };
