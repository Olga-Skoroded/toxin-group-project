import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Field } from 'react-final-form';

import Avatar from 'components/Avatar/Avatar';
import Button from 'components/Button/Button';
import Slider from 'components/Slider/Slider';

import * as S from './AvatarLoader.styles';

type Props = {
  name: string;
};

const AvatarLoader: React.FC<Props> = ({ name }: Props) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const [isEditorVisible, setEditorVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [zoomSize, setZoomSize] = useState(1);
  const [snackBarStatus, setSnackBarSettings] = useState({
    isOpen: false,
    text: '',
  });
  let canvas: AvatarEditor;

  const setEditorRef = (editor: AvatarEditor) => {
    canvas = editor;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      setImage(event.target.result);
      setEditorVisible(true);
    };

    try {
      reader.readAsDataURL(file);
    } catch (error) {
      setSnackBarSettings({
        isOpen: true,
        text: 'Не удалось установить аватар',
      });
    }

    e.target.value = '';
  };

  const handleSliderChange = (value: number) => {
    setZoomSize(value);
  };

  const handleCancelButtonClick = () => {
    setEditorVisible(false);
  };

  const handleSnackBarClose = () => {
    setSnackBarSettings({
      ...snackBarStatus,
      isOpen: false,
    });
  };

  const useStyles = makeStyles(() => ({
    avatarLoader: { width: '7.14285rem', height: '7.14285rem' },
  }));
  const classes = useStyles();

  return (
    <S.AvatarLoader>
      <Field
        name={name}
        render={({ input: { value, onChange, ...input } }) => {
          const handleSaveButtonClick = () => {
            if (canvas) {
              const canvasScaled = canvas.getImageScaledToCanvas();

              setImage(null);
              setEditorVisible(false);
              setCroppedImage(canvasScaled.toDataURL());
              canvasScaled.toBlob((blob) => {
                onChange(blob);
              });
            }
          };

          return (
            <>
              <S.AvatarWrapper>
                <Avatar photoURL={croppedImage} className={classes.avatarLoader} />
                <S.UploadButton />
                <S.HiddenInput
                  {...input}
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </S.AvatarWrapper>
              {isEditorVisible && (
                <S.CropperWrapper>
                  <S.CancelButton onClick={handleCancelButtonClick} />
                  <S.CropperTitle>Выберите область отображения</S.CropperTitle>
                  <S.Description>
                    Выбранная миниатюра будет использоваться в оставленных вами комментариях.
                  </S.Description>
                  <AvatarEditor
                    ref={setEditorRef}
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
                        initialValue={zoomSize}
                        onChange={handleSliderChange}
                      />
                    </S.SliderWrapper>
                    <Button isFilled isFlat onClick={handleSaveButtonClick}>
                      Сохранить
                    </Button>
                  </S.Controls>
                </S.CropperWrapper>
              )}
            </>
          );
        }}
      />
      <S.CustomSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackBarStatus.isOpen}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        message={snackBarStatus.text}
        action={
          <>
            <IconButton
              size="medium"
              aria-label="close"
              color="inherit"
              onClick={handleSnackBarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </S.AvatarLoader>
  );
};

export default AvatarLoader;
