import firebase from 'firebase';
import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { takeLeadingAction } from 'redux/action.model';
import { Dependencies } from 'redux/api.model';
import {
  getEmailUpdateErrorMessage,
  getPasswordUpdateErrorMessage,
} from 'shared/helpers/errorMessages';

import {
  EmailUpdateRequest,
  PasswordUpdateRequest,
  UpdateAdditionalUserDataRequest,
  UsernameUpdateRequest,
  GetAdditionalUserDataRequest,
  AvatarRemoveRequest,
  AvatarUpdateRequest,
} from '../../model';
import {
  emailUpdateFailed,
  emailUpdateSuccess,
  getAdditionalUserDataFailed,
  getAdditionalUserDataSuccess,
  passwordUpdateFailed,
  passwordUpdateSuccess,
  updateAdditionalUserDataFailed,
  updateAdditionalUserDataSuccess,
  usernameUpdateFailed,
  usernameUpdateSuccess,
  avatarRemoveSuccess,
  avatarRemoveFailed,
  avatarUpdateSuccess,
  avatarUpdateFailed,
} from '../actions';

function* emailUpdate(_: Dependencies, { payload }: EmailUpdateRequest) {
  try {
    const { user, email } = payload;

    yield user.verifyBeforeUpdateEmail(email);

    yield put(
      emailUpdateSuccess('A confirmation email has been sent to the specified email address'),
    );
  } catch (err) {
    yield put(emailUpdateFailed(getEmailUpdateErrorMessage(err)));
  }
}

function* passwordUpdate({ api }: Dependencies, { payload }: PasswordUpdateRequest) {
  const { user, currentPassword, newPassword, confirmPassword } = payload;
  try {
    if (newPassword !== confirmPassword) throw new Error('Passwords do not match');

    const { email } = user;
    const userAuthInfo: string[] = yield call(api.auth.fetchSignInMethodsForEmail, email);
    const isEmailAuth = userAuthInfo.includes('password');
    const isGoogleAuth = userAuthInfo.includes('google.com');

    if (isEmailAuth) {
      const credential = firebase.auth.EmailAuthProvider.credential(email, currentPassword);
      yield user.reauthenticateWithCredential(credential);
    } else if (isGoogleAuth) {
      yield user.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    yield user.updatePassword(newPassword);

    yield put(passwordUpdateSuccess('Password changed successfully'));
  } catch (err) {
    yield put(passwordUpdateFailed(getPasswordUpdateErrorMessage(err)));
  }
}

function* getAdditionalUserData({ api }: Dependencies, { payload }: GetAdditionalUserDataRequest) {
  try {
    const additionalUserData = yield call(api.auth.getAdditionalUserInformation, payload.uid);
    yield put(getAdditionalUserDataSuccess(additionalUserData));
  } catch (err) {
    yield put(getAdditionalUserDataFailed());
  }
}

function* updateAdditionalUserData(
  { api }: Dependencies,
  { payload: { user, data } }: UpdateAdditionalUserDataRequest,
) {
  try {
    const isDocument = yield call(api.auth.getAdditionalUserInformation, user.uid);
    if (isDocument) {
      yield call(api.auth.updateAdditionalUserInformation, user.uid, data);
    } else {
      yield call(api.auth.addAdditionalUserInformation, user.uid, data);
    }
    yield put(updateAdditionalUserDataSuccess('Data has been successfully updated'));
  } catch (err) {
    yield put(updateAdditionalUserDataFailed('An error occured, please try again later'));
  }
}

function* usernameUpdate(_: Dependencies, { payload }: UsernameUpdateRequest) {
  try {
    const { user, displayName } = payload;

    yield user.updateProfile({ displayName });

    yield put(usernameUpdateSuccess('Data has been successfully updated'));
  } catch (err) {
    yield put(usernameUpdateFailed('An error occured, please try again later'));
  }
}

function* avatarUpdate({ api }: Dependencies, { payload }: AvatarUpdateRequest) {
  try {
    const { user, avatar } = payload;
    const photoURL = yield call(api.auth.getPhotoURL, user.uid, avatar);

    yield user.updateProfile({ photoURL });

    yield put(avatarUpdateSuccess('Аватар был успешно изменен'));
  } catch (err) {
    yield put(avatarUpdateFailed('Произошла ошибка,, повторите попытку позже'));
  }
}

function* avatarRemove({ api }: Dependencies, { payload }: AvatarRemoveRequest) {
  try {
    const { user } = payload;

    yield user.updateProfile({ photoURL: null });
    yield api.auth.removeUserAvatar(user.uid);

    yield put(avatarRemoveSuccess('Аватар был успешно удален'));
  } catch (err) {
    yield put(avatarRemoveFailed('Произошла ошибка, повторите попытку позже'));
  }
}

function* rootSaga(deps: Dependencies): SagaIterator {
  yield takeLeadingAction<EmailUpdateRequest['type']>('EMAIL_UPDATE_PROCESS', emailUpdate, deps);
  yield takeLeadingAction<PasswordUpdateRequest['type']>(
    'PASSWORD_UPDATE_PROCESS',
    passwordUpdate,
    deps,
  );
  yield takeLeadingAction<GetAdditionalUserDataRequest['type']>(
    'GET_ADDITIONAL_USER_DATA_PROCESS',
    getAdditionalUserData,
    deps,
  );
  yield takeLeadingAction<UpdateAdditionalUserDataRequest['type']>(
    'UPDATE_ADDITIONAL_USER_DATA_PROCESS',
    updateAdditionalUserData,
    deps,
  );
  yield takeLeadingAction<UsernameUpdateRequest['type']>(
    'USERNAME_UPDATE_PROCESS',
    usernameUpdate,
    deps,
  );
  yield takeLeadingAction<AvatarUpdateRequest['type']>('AVATAR_UPDATE_PROCESS', avatarUpdate, deps);
  yield takeLeadingAction<AvatarRemoveRequest['type']>('AVATAR_REMOVE_PROCESS', avatarRemove, deps);
}

export { rootSaga };
