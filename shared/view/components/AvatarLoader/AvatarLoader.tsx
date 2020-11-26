import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { ChangeEvent, memo, useState, useEffect } from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { AvatarEditor } from 'shared/view/components/AvatarEditor/AvatarEditor';
import { Avatar } from 'shared/view/elements/Avatar/Avatar';

import * as S from './AvatarLoader.styles';

type Props = {
  name: string;
  photoURL?: string;
};

const AvatarLoader = memo(({ name, photoURL }: Props) => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isEditorVisible, setEditorVisible] = useState(false);
  const [snackBarStatus, setSnackBarSettings] = useState({
    isOpen: false,
    text: '',
  });

  const { t } = useTranslation(['AvatarLoader', 'Shared']);

  useEffect(() => {
    photoURL && setCroppedImage(photoURL);
  }, [photoURL]);

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

  const handleEditorCancel = () => {
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
          const handleEditorSave = (canvasScaled: HTMLCanvasElement) => {
            setImage(null);
            setEditorVisible(false);
            setCroppedImage(canvasScaled.toDataURL());
            canvasScaled.toBlob((blob: Blob) => {
              onChange(blob);
            });
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
                  <AvatarEditor
                    onCancel={handleEditorCancel}
                    image={image}
                    onSave={handleEditorSave}
                  />
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
