import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { ChangeEvent, memo, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { Avatar, Button, Slider } from 'shared/view/elements';

import * as S from './AvatarLoader.styles';

type Props = {
  name: string;
};

const AvatarLoader = memo(({ name }: Props) => {
  const [croppedImage, setCroppedImage] = useState(null);
  const [isEditorVisible, setEditorVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [zoomSize, setZoomSize] = useState(1);
  const [snackBarStatus, setSnackBarSettings] = useState({
    isOpen: false,
    text: '',
  });
  let canvas: AvatarEditor;

  const { t } = useTranslation(['AvatarLoader', 'Shared']);

  const setEditorRef = (editor: AvatarEditor) => {
    canvas = editor;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        text: t('Failed to set avatar'),
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
                  <S.CropperTitle>{t('Select display area')}</S.CropperTitle>
                  <S.Description>
                    {t('The selected thumbnail will be used in the comments you leave.')}
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
                      {t('Shared:Save')}
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
});

export { AvatarLoader };
